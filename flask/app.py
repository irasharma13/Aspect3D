from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import subprocess

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

OUTPUT_FOLDER = 'output'
if not os.path.exists(OUTPUT_FOLDER):
    os.makedirs(OUTPUT_FOLDER)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    output_path = os.path.join(OUTPUT_FOLDER, 'output.glb')
    blender_process(file_path, output_path)

    return jsonify({'model_url': f'http://localhost:5000/output/output.glb'})

def blender_process(input_path, output_path):
    blender_script = f"""
    import bpy
    import sys

    argv = sys.argv
    input_path = argv[argv.index('--') + 1]
    output_path = argv[argv.index('--') + 2]

    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.obj(filepath=input_path)
    bpy.ops.export_scene.gltf(filepath=output_path)
    bpy.ops.wm.save_as_mainfile(filepath=output_path.replace('.glb', '.blend'))
    """

    with open('blender_script.py', 'w') as f:
        f.write(blender_script)

    subprocess.run(['blender', '--background', '--python', 'blender_script.py', '--', input_path, output_path])

@app.route('/output/<path:filename>', methods=['GET'])
def download_file(filename):
    return send_from_directory(OUTPUT_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)
