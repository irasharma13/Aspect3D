import bpy
from mathutils import Vector

bpy.ops.image.open(filepath="/Users/irasharma/Desktop/Aspect3D/img_test/public/img_2.jpg")
image = bpy.data.images["img_2.jpg"]

bpy.ops.object.empty_add(type='IMAGE')
empty = bpy.context.object
empty.data = image

verts = [
    Vector((1, 1, 0)),
    Vector((-1, 1, 0)),
    Vector((1, -1, 0)),
    Vector((-1, -1, 0))
]

edges = []
faces = [(0, 1, 2, 3)]

mesh = bpy.data.meshes.new(name ='BaseMesh')
mesh.from_pydata(verts, edges, faces)
mesh.update()

obj_m = bpy.data.objects.new('BaseMesh', mesh)

bpy.context.collection.objects.link(obj_m)
bpy.context.view_layer.objects.active = obj_m

bpy.ops.object.mode_set(mode='EDIT')

bpy.ops.uv.seam_from_islands()

bpy.ops.uv.unwrap(method='ANGLE_BASED', margin=0.001)

bpy.ops.object.mode_set(mode='OBJECT')

mat = bpy.data.materials.new(name='TextureMaterial')
mat.use_nodes = True

if obj_m.data.materials:
    obj_m.data.materials[0] = mat
else:
    obj_m.data.materials.append(mat)

bpy.ops.object.mode_set(MODE='SCULPT')

