import bpy
import sys

argv = sys.argv
input_path = argv[argv.index('--') + 1]
output_path = argv[argv.index('--') + 2]

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.obj(filepath=input_path)
bpy.ops.export_scene.gltf(filepath=output_path)
bpy.ops.wm.save_as_mainfile(filepath=output_path.replace('.glb', '.blend'))
