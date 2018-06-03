    /*---------------------Addition of all models to the scene--------------------*/

    //Bedroom
    //Bed model

    var bed_color = new THREE.Color(1, 1, 1);
    var bed_material = new THREE.MeshPhongMaterial();

    bed_material.color = bed_color;
    bed_material.shininess = 0;

    var loader = new THREE.PLYLoader();
    var bed_mesh = null;
    loader.load('Final Models/Bed1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(25 / size.length(), 25 / size.length(), 25 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);

      combined.multiply(tra);
      combined.multiply(sca);

      bed_mesh = new THREE.Mesh(geometry, bed_material);

      bed_mesh.applyMatrix(sca);
      bed_mesh.name = "loaded_mesh";
      bed_mesh.position.x -= FLOOR_WIDTH / 3;
      bed_mesh.position.z -= FLOOR_LENGTH / 2 - FLOOR_LENGTH * (1 - WALL_LEFT_LENGTH) - 2.5;

      bed_mesh.castShadow = true;
      scene.add(bed_mesh);
    });

    //Lamp_1 bedroom model

    var lamp_color_1 = new THREE.Color(1, 0.8, 0);
    var lamp_material_1 = new THREE.MeshPhongMaterial();


    lamp_material_1.color = lamp_color_1;
    lamp_material_1.shininess = 100;

    var loader8 = new THREE.PLYLoader();
    var lamp_mesh_1 = null;
    loader8.load('Final Models/lamp2.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(10 / size.length(), 10 / size.length(), 10 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);

      combined.multiply(tra);
      combined.multiply(sca);

      lamp_mesh_1 = new THREE.Mesh(geometry, lamp_material_1);

      lamp_mesh_1.applyMatrix(sca);
      lamp_mesh_1.name = "loaded_mesh_8";

      lamp_mesh_1.position.x -= FLOOR_WIDTH / 3 + 6;
      lamp_mesh_1.position.y += 11;

      lamp_mesh_1.castShadow = false;
      scene.add(lamp_mesh_1);
      lamp_mesh_1.add(bedroom_light);
    });

    //treasurechest2 bedroom Model
    var treasurechest2_color = new THREE.Color(0.6, 0.3, 0.2);
    var treasurechest2_material = new THREE.MeshPhongMaterial();

    treasurechest2_material.color = treasurechest2_color;
    treasurechest2_material.shininess = 0;

    var loaderN = new THREE.PLYLoader();
    var treasurechest2_mesh = null;
    loaderN.load('Final Models/treasurechest.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(11 / size.length(), 11 / size.length(), 11 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(2 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      treasurechest2_mesh = new THREE.Mesh(geometry, treasurechest2_material);

      treasurechest2_mesh.applyMatrix(sca);

      treasurechest2_mesh.applyMatrix(rot);
      treasurechest2_mesh.name = "loaded_mesh_N";

      treasurechest2_mesh.position.x -= 27;
      treasurechest2_mesh.position.z += 4;

      treasurechest2_mesh.castShadow = true;
      scene.add(treasurechest2_mesh);
    });

    //nightstand1 bedroom Model
    var nightstand1_color = new THREE.Color(0.6, 0.3, 0.2);
    var nightstand1_material = new THREE.MeshPhongMaterial();

    nightstand1_material.color = nightstand1_color;
    nightstand1_material.shininess = 0;

    var loaderS = new THREE.PLYLoader();
    var nightstand1_mesh = null;
    loaderS.load('Final Models/nightstand1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(9 / size.length(), 9 / size.length(), 9 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(2 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      nightstand1_mesh = new THREE.Mesh(geometry, nightstand1_material);

      nightstand1_mesh.applyMatrix(sca);

      nightstand1_mesh.applyMatrix(rot);
      nightstand1_mesh.name = "loaded_mesh_S";

      nightstand1_mesh.position.x -= 16;
      nightstand1_mesh.position.z += -13.5;

      nightstand1_mesh.castShadow = true;
      scene.add(nightstand1_mesh);
    });

    //nightstand2 bedroom Model
    var nightstand2_color = new THREE.Color(0.6, 0.3, 0.2);
    var nightstand2_material = new THREE.MeshPhongMaterial();

    nightstand2_material.color = nightstand2_color;
    nightstand2_material.shininess = 0;

    var loaderT = new THREE.PLYLoader();
    var nightstand2_mesh = null;
    loaderT.load('Final Models/nightstand1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(9 / size.length(), 9 / size.length(), 9 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(2 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      nightstand2_mesh = new THREE.Mesh(geometry, nightstand2_material);

      nightstand2_mesh.applyMatrix(sca);

      nightstand2_mesh.applyMatrix(rot);
      nightstand2_mesh.name = "loaded_mesh_T";

      nightstand2_mesh.position.x -= 36.5;
      nightstand2_mesh.position.z -= 13.5;

      nightstand2_mesh.castShadow = true;
      scene.add(nightstand2_mesh);
    });


    //Extraroom
    //bookshelf model

    var bookshelf_color = new THREE.Color(0.6, 0.3, 0.2);
    var bookshelf_material = new THREE.MeshPhongMaterial();

    bookshelf_material.color = bookshelf_color;
    bookshelf_material.shininess = 0;

    var loaderO = new THREE.PLYLoader();
    var bookshelf_mesh = null;
    loaderO.load('Final Models/bookshelf2.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(23 / size.length(), 23 / size.length(), 23 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(3 * Math.PI / 2);

      combined.multiply(tra);
      combined.multiply(sca);


      bookshelf_mesh = new THREE.Mesh(geometry, bookshelf_material);

      bookshelf_mesh.applyMatrix(sca);
      bookshelf_mesh.applyMatrix(rot);
      bookshelf_mesh.name = "loaded_mesh_O";
      bookshelf_mesh.position.x -= 20.7;
      bookshelf_mesh.position.z += 33.7;
      bookshelf_mesh.position.y += 1;


      bookshelf_mesh.castShadow = true;
      scene.add(bookshelf_mesh);
    });

    //fancychair1 model

    var fancychair1_color = new THREE.Color(1, 0.647, 0);
    var fancychair1_material = new THREE.MeshPhongMaterial();

    fancychair1_material.color = fancychair1_color;
    fancychair1_material.shininess = 0;

    var loaderP = new THREE.PLYLoader();
    var fancychair1_mesh = null;
    loaderP.load('Final Models/fancychair1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var rot1 = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(12 / size.length(), 12 / size.length(), 12 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot1.makeRotationX(3 * Math.PI / 2);
      rot.makeRotationY(0.5 * Math.PI - 100);

      combined.multiply(tra);
      combined.multiply(sca);

      fancychair1_mesh = new THREE.Mesh(geometry, fancychair1_material);

      fancychair1_mesh.applyMatrix(sca);
      fancychair1_mesh.applyMatrix(rot1);
      fancychair1_mesh.applyMatrix(rot);
      fancychair1_mesh.name = "loaded_mesh_P";

      fancychair1_mesh.position.x -= 35;
      fancychair1_mesh.position.z += 51;

      fancychair1_mesh.castShadow = true;
      scene.add(fancychair1_mesh);
    });

    //fancychair2 model

    var fancychair2_color = new THREE.Color(1, 0.647, 0);
    var fancychair2_material = new THREE.MeshPhongMaterial();

    fancychair2_material.color = fancychair2_color;
    fancychair2_material.shininess = 0;

    var loaderQ = new THREE.PLYLoader();
    var fancychair2_mesh = null;
    loaderQ.load('Final Models/fancychair1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var rot1 = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(13 / size.length(), 13 / size.length(), 13 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot1.makeRotationX(3 * Math.PI / 2);
      rot.makeRotationY(0.5 * Math.PI + 100);

      combined.multiply(tra);
      combined.multiply(sca);

      fancychair2_mesh = new THREE.Mesh(geometry, fancychair2_material);

      fancychair2_mesh.applyMatrix(sca);
      fancychair2_mesh.applyMatrix(rot1);
      fancychair2_mesh.applyMatrix(rot);
      fancychair2_mesh.name = "loaded_mesh_Q";

      fancychair2_mesh.position.x -= 35;
      fancychair2_mesh.position.z += 38;

      fancychair2_mesh.castShadow = true;
      scene.add(fancychair2_mesh);
    });

    //smalltable extra room model

    var smalltable_color = new THREE.Color(1, 1, 1);
    var smalltable_material = new THREE.MeshPhongMaterial();

    smalltable_material.color = smalltable_color;
    smalltable_material.shininess = 0;

    var loaderR = new THREE.PLYLoader();
    var smalltable_mesh = null;
    loaderR.load('Final Models/smalltable2.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(11 / size.length(), 11 / size.length(), 11 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      smalltable_mesh = new THREE.Mesh(geometry, smalltable_material);

      smalltable_mesh.applyMatrix(sca);
      smalltable_mesh.applyMatrix(rot);
      smalltable_mesh.name = "loaded_mesh_R";

      smalltable_mesh.position.x -= 28;
      smalltable_mesh.position.z += 44.5;

      smalltable_mesh.castShadow = true;
      scene.add(smalltable_mesh);
    });

    //Kitchen
    //Fridge model

    var fridge_color = new THREE.Color(1, 1, 1);
    var fridge_material = new THREE.MeshPhongMaterial();

    fridge_material.color = fridge_color;
    fridge_material.shininess = 0;

    var loader3 = new THREE.PLYLoader();
    var fridge_mesh = null;
    loader3.load('Final Models/fridge1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(15 / size.length(), 15 / size.length(), 15 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(2 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      fridge_mesh = new THREE.Mesh(geometry, fridge_material);

      fridge_mesh.applyMatrix(sca);
      fridge_mesh.applyMatrix(rot);
      fridge_mesh.name = "loaded_mesh_3";

      fridge_mesh.position.x -= -36.4;
      fridge_mesh.position.z -= 0.8;

      fridge_mesh.castShadow = true;
      scene.add(fridge_mesh);
    });

    //dishwasher model

    var dishwasher_color = new THREE.Color(0.5, 0.5, 0.5);
    var dishwasher_material = new THREE.MeshPhongMaterial();

    dishwasher_material.color = dishwasher_color;
    dishwasher_material.shininess = 0;

    var loaderA = new THREE.PLYLoader();
    var dishwasher_mesh = null;
    loaderA.load('Final Models/dishwasher1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(10.2 / size.length(), 10.2 / size.length(), 10.2 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(3 * Math.PI / 2);

      combined.multiply(tra);
      combined.multiply(sca);

      dishwasher_mesh = new THREE.Mesh(geometry, dishwasher_material);

      dishwasher_mesh.applyMatrix(sca);
      dishwasher_mesh.applyMatrix(rot);
      dishwasher_mesh.name = "loaded_mesh_A";

      dishwasher_mesh.position.x -= -37.4;
      dishwasher_mesh.position.z -= -24;

      dishwasher_mesh.castShadow = true;
      scene.add(dishwasher_mesh);
    });

    //sink model

    var sink_color = new THREE.Color(0.5, 0.5, 0.5);
    var sink_material = new THREE.MeshPhongMaterial();

    sink_material.color = sink_color;
    sink_material.shininess = 0;

    var loaderB = new THREE.PLYLoader();
    var sink_mesh = null;
    loaderB.load('Final Models/sink1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(13 / size.length(), 13 / size.length(), 13 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      // rot.makeRotationY(-3*Math.PI/2);

      combined.multiply(tra);
      combined.multiply(sca);

      sink_mesh = new THREE.Mesh(geometry, sink_material);

      sink_mesh.applyMatrix(sca);

      // sink_mesh.applyMatrix(rot);
      sink_mesh.name = "loaded_mesh_B";

      sink_mesh.position.x -= -28.2;
      sink_mesh.position.z -= 1.5;

      sink_mesh.castShadow = true;
      scene.add(sink_mesh);
    });

    //stove model

    var stove_color = new THREE.Color(0.5, 0.5, 0.5);
    var stove_material = new THREE.MeshPhongMaterial();

    stove_material.color = stove_color;
    stove_material.shininess = 0;

    var loaderC = new THREE.PLYLoader();
    var stove_mesh = null;
    loaderC.load('Final Models/stove1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(11 / size.length(), 11 / size.length(), 11 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(1.5 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      stove_mesh = new THREE.Mesh(geometry, stove_material);

      stove_mesh.applyMatrix(sca);

      stove_mesh.applyMatrix(rot);
      stove_mesh.name = "loaded_mesh_C";

      stove_mesh.position.x -= -36.8;
      stove_mesh.position.z -= -13.5;

      stove_mesh.castShadow = true;
      scene.add(stove_mesh);
    });

    //aboveoven1 model

    var aboveoven1_color = new THREE.Color(0.5, 0.5, 0.5);
    var aboveoven1_material = new THREE.MeshPhongMaterial();

    aboveoven1_material.color = aboveoven1_color;
    aboveoven1_material.shininess = 0;

    var loaderZ = new THREE.PLYLoader();
    var aboveoven1_mesh = null;
    loaderZ.load('Final Models/aboveoven1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var rot1 = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(8 / size.length(), 8 / size.length(), 8 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot1.makeRotationX(3 * Math.PI / 2);
      rot.makeRotationY(1.5 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      aboveoven1_mesh = new THREE.Mesh(geometry, aboveoven1_material);

      aboveoven1_mesh.applyMatrix(sca);
      aboveoven1_mesh.applyMatrix(rot1);
      aboveoven1_mesh.applyMatrix(rot);
      aboveoven1_mesh.name = "loaded_mesh_Z";

      aboveoven1_mesh.position.x += 38;
      aboveoven1_mesh.position.z += 13.5;
      aboveoven1_mesh.position.y += 10;

      aboveoven1_mesh.castShadow = true;
      scene.add(aboveoven1_mesh);
    });

    //cabinet1 model

    var cabinet1_color = new THREE.Color(0.5, 0.5, 0.5);
    var cabinet1_material = new THREE.MeshPhongMaterial();

    cabinet1_material.color = cabinet1_color;
    cabinet1_material.shininess = 0;

    var loaderD = new THREE.PLYLoader();
    var cabinet1_mesh = null;
    loaderD.load('Final Models/cabinet1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(10 / size.length(), 10 / size.length(), 10 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(1.5 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      cabinet1_mesh = new THREE.Mesh(geometry, cabinet1_material);

      cabinet1_mesh.applyMatrix(sca);

      cabinet1_mesh.applyMatrix(rot);
      cabinet1_mesh.name = "loaded_mesh_D";

      cabinet1_mesh.position.x -= -36.7;
      cabinet1_mesh.position.z -= -29.9;

      cabinet1_mesh.castShadow = true;
      scene.add(cabinet1_mesh);
    });

    //cabinet2 model

    var cabinet2_color = new THREE.Color(0.5, 0.5, 0.5);
    var cabinet2_material = new THREE.MeshPhongMaterial();

    cabinet2_material.color = cabinet2_color;
    cabinet2_material.shininess = 0;

    var loaderE = new THREE.PLYLoader();
    var cabinet2_mesh = null;
    loaderE.load('Final Models/cabinet2.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(10 / size.length(), 10 / size.length(), 10 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(1.5 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      cabinet2_mesh = new THREE.Mesh(geometry, cabinet2_material);

      cabinet2_mesh.applyMatrix(sca);

      cabinet2_mesh.applyMatrix(rot);
      cabinet2_mesh.name = "loaded_mesh_E";

      cabinet2_mesh.position.x -= -36.7;
      cabinet2_mesh.position.z -= -18.9;

      cabinet2_mesh.castShadow = true;
      scene.add(cabinet2_mesh);
    });

    //Bathroom
    //bathtube1 Model

    var bathtube1_color = new THREE.Color(0, 0.75, 0.65);
    var bathtube1_material = new THREE.MeshPhongMaterial();

    bathtube1_material.color = bathtube1_color;
    bathtube1_material.shininess = 0;

    var loaderF = new THREE.PLYLoader();
    var bathtube1_mesh = null;
    loaderF.load('Final Models/bathtube1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(20 / size.length(), 20 / size.length(), 20 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(1.5 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      bathtube1_mesh = new THREE.Mesh(geometry, bathtube1_material);

      bathtube1_mesh.applyMatrix(sca);

      bathtube1_mesh.applyMatrix(rot);
      bathtube1_mesh.name = "loaded_mesh_F";

      bathtube1_mesh.position.x -= -14;
      bathtube1_mesh.position.z -= -44;

      bathtube1_mesh.castShadow = true;
      scene.add(bathtube1_mesh);
    });

    //sink3 Model
    var sink3_color = new THREE.Color(0.5, 0.5, 0.5);
    var sink3_material = new THREE.MeshPhongMaterial();

    sink3_material.color = sink3_color;
    sink3_material.shininess = 0;

    var loaderG = new THREE.PLYLoader();
    var sink3_mesh = null;
    loaderG.load('Final Models/sink3.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var rot1 = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(16 / size.length(), 16 / size.length(), 16 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot1.makeRotationX(3 * Math.PI / 2);
      rot.makeRotationY(Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      sink3_mesh = new THREE.Mesh(geometry, sink3_material);

      sink3_mesh.applyMatrix(sca);

      sink3_mesh.applyMatrix(rot1);
      sink3_mesh.applyMatrix(rot);
      sink3_mesh.name = "loaded_mesh_G";

      sink3_mesh.position.x -= 0;
      sink3_mesh.position.z -= -50.5;

      sink3_mesh.castShadow = true;
      scene.add(sink3_mesh);
    });

    //toilet1 Model
    var toilet1_color = new THREE.Color(1, 1, 1);
    var toilet1_material = new THREE.MeshPhongMaterial();

    toilet1_material.color = toilet1_color;
    toilet1_material.shininess = 0;

    var loaderH = new THREE.PLYLoader();
    var toilet1_mesh = null;
    loaderH.load('Final Models/toilet1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var rot1 = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(13 / size.length(), 13 / size.length(), 13 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot1.makeRotationX(3 * Math.PI / 2);
      rot.makeRotationY(2.5 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      toilet1_mesh = new THREE.Mesh(geometry, toilet1_material);

      toilet1_mesh.applyMatrix(sca);

      toilet1_mesh.applyMatrix(rot1);
      toilet1_mesh.applyMatrix(rot);
      toilet1_mesh.name = "loaded_mesh_H";

      toilet1_mesh.position.x -= 16.7;
      toilet1_mesh.position.z -= -53;

      toilet1_mesh.castShadow = true;
      scene.add(toilet1_mesh);
    });

    //treasurechest bathroom Model
    var treasurechest_color = new THREE.Color(0.6, 0.3, 0.2);
    var treasurechest_material = new THREE.MeshPhongMaterial();

    treasurechest_material.color = treasurechest_color;
    treasurechest_material.shininess = 0;

    var loaderI = new THREE.PLYLoader();
    var treasurechest_mesh = null;
    loaderI.load('Final Models/treasurechest.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(11 / size.length(), 11 / size.length(), 11 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(1.5 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      treasurechest_mesh = new THREE.Mesh(geometry, treasurechest_material);

      treasurechest_mesh.applyMatrix(sca);

      treasurechest_mesh.applyMatrix(rot);
      treasurechest_mesh.name = "loaded_mesh_I";

      treasurechest_mesh.position.x -= 17.3;
      treasurechest_mesh.position.z -= -37.5;

      treasurechest_mesh.castShadow = true;
      scene.add(treasurechest_mesh);
    });

    //carpet1 Model
    var carpet1_color = new THREE.Color(0, 1, 1);
    var carpet1_material = new THREE.MeshPhongMaterial();

    carpet1_material.color = carpet1_color;
    carpet1_material.shininess = 0;

    var loaderJ = new THREE.PLYLoader();
    var carpet1_mesh = null;
    loaderJ.load('Final Models/carpet1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(17 / size.length(), 17 / size.length(), 17 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(1.5 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      carpet1_mesh = new THREE.Mesh(geometry, carpet1_material);

      carpet1_mesh.applyMatrix(sca);

      carpet1_mesh.applyMatrix(rot);
      carpet1_mesh.name = "loaded_mesh_J";

      carpet1_mesh.position.x -= -0.4;
      carpet1_mesh.position.z -= -44;

      carpet1_mesh.castShadow = true;
      scene.add(carpet1_mesh);
    });

    //carpet2 Model
    var carpet2_color = new THREE.Color(0, 1, 1);
    var carpet2_material = new THREE.MeshPhongMaterial();

    carpet2_material.color = carpet2_color;
    carpet2_material.shininess = 0;

    var loaderK = new THREE.PLYLoader();
    var carpet2_mesh = null;
    loaderK.load('Final Models/carpet1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(8 / size.length(), 8 / size.length(), 8 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(1.5 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      carpet2_mesh = new THREE.Mesh(geometry, carpet2_material);

      carpet2_mesh.applyMatrix(sca);

      carpet2_mesh.applyMatrix(rot);
      carpet2_mesh.name = "loaded_mesh_K";

      carpet2_mesh.position.x -= 17;
      carpet2_mesh.position.z -= -48;

      carpet2_mesh.castShadow = true;
      scene.add(carpet2_mesh);
    });

    //lampbathroom model

    var lampbathroom_color = new THREE.Color(1, 0.8, 0);
    var lampbathroom_material = new THREE.MeshPhongMaterial();

    lampbathroom_material.color = lampbathroom_color;
    lampbathroom_material.shininess = 100;

    var loaderL = new THREE.PLYLoader();
    var lampbathroom_mesh = null;
    loaderL.load('Final Models/lamp2.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale( 10 / size.length(), 10 / size.length(), 10 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);

      combined.multiply(tra);
      combined.multiply(sca);

      lampbathroom_mesh = new THREE.Mesh(geometry, lampbathroom_material);

      lampbathroom_mesh.applyMatrix(sca);
      lampbathroom_mesh.name = "loaded_mesh_L";

      lampbathroom_mesh.position.x += -8;
      lampbathroom_mesh.position.y += 11;
      lampbathroom_mesh.position.z += 43;
	    
      lampbathroom_mesh.castShadow = false;
      scene.add(lampbathroom_mesh);
	lampbathroom_mesh.add(bathroom_light);
    });

    //clothesrack1 Model
    var clothesrack1_color = new THREE.Color(0.6, 0.3, 0.2);
    var clothesrack1_material = new THREE.MeshPhongMaterial();

    clothesrack1_material.color = clothesrack1_color;
    clothesrack1_material.shininess = 0;

    var loaderM = new THREE.PLYLoader();
    var clothesrack1_mesh = null;
    loaderM.load('Final Models/clothesrack1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(13 / size.length(), 13 / size.length(), 13 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(1.5 * Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      clothesrack1_mesh = new THREE.Mesh(geometry, clothesrack1_material);

      clothesrack1_mesh.applyMatrix(sca);

      clothesrack1_mesh.applyMatrix(rot);
      clothesrack1_mesh.name = "loaded_mesh_M";

      clothesrack1_mesh.position.x -= -8;
      clothesrack1_mesh.position.z -= -36;

      clothesrack1_mesh.castShadow = true;
      scene.add(clothesrack1_mesh);
    });

    //Livingroom
    //Lamp model

    var lamp_color = new THREE.Color(1, 0.8, 0);
    var lamp_material = new THREE.MeshPhongMaterial();

    lamp_material.color = lamp_color;
    lamp_material.shininess = 100;

    var loader4 = new THREE.PLYLoader();
    var lamp_mesh = null;
    loader4.load('Final Models/lamp2.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(10 / size.length(), 10 / size.length(), 10 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);

      combined.multiply(tra);
      combined.multiply(sca);

      lamp_mesh = new THREE.Mesh(geometry, lamp_material);

      lamp_mesh.applyMatrix(sca);
      lamp_mesh.name = "loaded_mesh_4";

      lamp_mesh.position.x += 2;
      lamp_mesh.position.y += 11;

      lamp_mesh.castShadow = false;
      scene.add(lamp_mesh);
	lamp_mesh.add(livingroom_light);
    });
    
    //sofa model
    
    var sofa_color = new THREE.Color(0.3, 0.3, 0.3);
    var sofa_material = new THREE.MeshPhongMaterial();

    sofa_material.color = sofa_color;
    sofa_material.shininess = 0;

    var loaderU = new THREE.PLYLoader();
    var sofa_mesh = null;
    loaderU.load('Final Models/sofa9.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
	var rot= new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(35 / size.length(), 35 / size.length(), 35 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
	rot.makeRotationY(1.5*Math.PI);

      combined.multiply(tra);
      combined.multiply(sca);

      sofa_mesh = new THREE.Mesh(geometry, sofa_material);

      sofa_mesh.applyMatrix(sca);
	sofa_mesh.applyMatrix(rot);
	    
      sofa_mesh.name = "loaded_mesh_U";
      sofa_mesh.position.x -= 162;
      sofa_mesh.position.z -= 160;

      sofa_mesh.castShadow = true;
      scene.add(sofa_mesh);
    });
    

    //Shelf model

    var shelf_color = new THREE.Color(0.6, 0.3, 0.2);
    var shelf_material = new THREE.MeshPhongMaterial();

    shelf_material.color = shelf_color;
    shelf_material.shininess = 0;

    var loader2 = new THREE.PLYLoader();
    var shelf_mesh = null;
    loader2.load('Final Models/shelf1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(40 / size.length(), 40 / size.length(), 40 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);

      combined.multiply(tra);
      combined.multiply(sca);

      shelf_mesh = new THREE.Mesh(geometry, shelf_material);

      shelf_mesh.applyMatrix(sca);
      shelf_mesh.name = "loaded_mesh_2";
      shelf_mesh.position.x -= FLOOR_WIDTH / 3 - FLOOR_WIDTH / 3 + 4;
      shelf_mesh.position.z -= FLOOR_LENGTH / 2 * (1 - WALL_LEFT_LENGTH) - FLOOR_LENGTH * 0.1 - 10.45;


      shelf_mesh.castShadow = true;
      scene.add(shelf_mesh);
    });

    //Table model

    var table_color = new THREE.Color(0, 0.75, 0.65);
    var table_material = new THREE.MeshPhongMaterial();

    table_material.color = table_color;
    table_material.shininess = 0;

    var loader5 = new THREE.PLYLoader();
    var table_mesh = null;
    loader5.load('Final Models/tablestyle1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(17 / size.length(), 17 / size.length(), 17 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(-Math.PI / 2);

      combined.multiply(tra);
      combined.multiply(sca);

      table_mesh = new THREE.Mesh(geometry, table_material);

      table_mesh.applyMatrix(sca);
      table_mesh.applyMatrix(rot);
      table_mesh.name = "loaded_mesh_5";

      table_mesh.position.x += 10;
      table_mesh.position.z += 15;
      table_mesh.position.y += 0.05;


      table_mesh.castShadow = true;
      scene.add(table_mesh);
    });

    //Chair model

    var chair_color_1 = new THREE.Color(1, 1, 1);
    var chair_material_1 = new THREE.MeshPhongMaterial();

    chair_material_1.color = chair_color_1;
    chair_material_1.shininess = 0;

    //Chair 1

    var loader6 = new THREE.PLYLoader();
    var chair_mesh_1 = null;
    loader6.load('Final Models/chair1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(10 / size.length(), 10 / size.length(), 10 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(-Math.PI / 2);

      combined.multiply(tra);
      combined.multiply(sca);

      chair_mesh_1 = new THREE.Mesh(geometry, chair_material_1);

      chair_mesh_1.applyMatrix(sca);
      chair_mesh_1.applyMatrix(rot);
      chair_mesh_1.name = "loaded_mesh_6";

      chair_mesh_1.position.x += 2.9;
      chair_mesh_1.position.z += 14;

      chair_mesh_1.castShadow = true;
      scene.add(chair_mesh_1);
    });

    //Chair 2

    var chair_color_2 = new THREE.Color(1, 1, 1);
    var chair_material_2 = new THREE.MeshPhongMaterial();

    chair_material_2.color = chair_color_2;
    chair_material_2.shininess = 0;

    var loader7 = new THREE.PLYLoader();
    var chair_mesh_2 = null;
    loader7.load('Final Models/chair1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(10 / size.length(), 10 / size.length(), 10 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(Math.PI / 2);

      combined.multiply(tra);
      combined.multiply(sca);

      chair_mesh_2 = new THREE.Mesh(geometry, chair_material_2);

      chair_mesh_2.applyMatrix(sca);
      chair_mesh_2.applyMatrix(rot);
      chair_mesh_2.name = "loaded_mesh_7";

      chair_mesh_2.position.x += 13;
      chair_mesh_2.position.z += 14;

      chair_mesh_2.castShadow = true;
      scene.add(chair_mesh_2);
    });


    //Television model

    var tv_color = new THREE.Color(0.5, 0.5, 0.5);
    var tv_material = new THREE.MeshPhongMaterial();

    tv_material.color = tv_color;
    tv_material.shininess = 10;

    var loader9 = new THREE.PLYLoader();
    var tv_mesh = null;
    loader9.load('Final Models/tv.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(20 / size.length(), 20 / size.length(), 20 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);

      combined.multiply(tra);
      combined.multiply(sca);
      rot.makeRotationX(-Math.PI / 2);

      tv_mesh = new THREE.Mesh(geometry, tv_material);

      tv_mesh.applyMatrix(sca);
      tv_mesh.applyMatrix(rot);
      tv_mesh.name = "loaded_mesh_9";

      tv_mesh.position.z -= FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - 2;

      tv_mesh.castShadow = true;
      scene.add(tv_mesh);
    });

    //Painting model

    var painting_color = new THREE.Color(0.8, 0.5, 0.8);
    var painting_material = new THREE.MeshPhongMaterial();

    painting_material.color = painting_color;
    painting_material.shininess = 0;

    var loader10 = new THREE.PLYLoader();
    var painting_mesh = null;
    loader10.load('Final Models/painting1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var rot = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(20 / size.length(), 20 / size.length(), 20 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);
      rot.makeRotationY(0.8);

      combined.multiply(tra);
      combined.multiply(sca);

      painting_mesh = new THREE.Mesh(geometry, painting_material);

      painting_mesh.applyMatrix(sca);
      painting_mesh.applyMatrix(rot);
      painting_mesh.name = "loaded_mesh_10";

      painting_mesh.position.x -= FLOOR_WIDTH / 2 - FLOOR_WIDTH / 2 * (1 - WALL_TOP_WIDTH) + 13.75;
      painting_mesh.position.z -= FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - (FLOOR_LENGTH * 0.2) / 2 + OFFSET;

      painting_mesh.castShadow = true;
      scene.add(painting_mesh);
    });

    //car room
    //Car model

    var car_color = new THREE.Color(0.6, 0, 0);
    var car_material = new THREE.MeshPhongMaterial();

    car_material.color = car_color;
    car_material.shininess = 0;

    var loader1 = new THREE.PLYLoader();
    var car_mesh = null;
    loader1.load('Final Models/car1.ply', function (geometry) {
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();

      var center = geometry.boundingBox.getCenter();
      var size = geometry.boundingBox.getSize();

      var sca = new THREE.Matrix4();
      var tra = new THREE.Matrix4();
      var combined = new THREE.Matrix4();

      sca.makeScale(24 / size.length(), 24 / size.length(), 24 / size.length());
      tra.makeTranslation(-center.x, -center.y, -center.z);

      combined.multiply(tra);
      combined.multiply(sca);

      car_mesh = new THREE.Mesh(geometry, car_material);

      car_mesh.applyMatrix(sca);
      car_mesh.name = "loaded_mesh_1";

      car_mesh.position.x += FLOOR_WIDTH / 3 + 2.5;
      car_mesh.position.y += 1.8;
      car_mesh.position.z += FLOOR_LENGTH / 2 - geometry_wall_parallel.parameters.depth / 2 - (FLOOR_LENGTH * 0.2) / 2 + 0.5;

      car_mesh.castShadow = true;
      scene.add(car_mesh);
    });