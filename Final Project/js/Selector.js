/*---------------------Selector of models in the scene--------------------*/

    var raycaster = new THREE.Raycaster();

    //Boolean variables of each of the items

    var selectedObj_bed = false;
    var selectedObj_car = false;
    var selectedObj_shelf = false;
    var selectedObj_bookshelf= false;
    var selectedObj_fridge = false;
    var selectedObj_lamp = false;
    var selectedObj_dishwasher= false;
    var selectedObj_sink= false;
    var selectedObj_stove= false;
    var selectedObj_table = false;
    var selectedObj_smalltable = false;
    var selectedObj_chair_1 = false;
    var selectedObj_chair_2 = false;
    var selectedObj_fancychair1 = false;
    var selectedObj_fancychair2 = false;
    var selectedObj_lamp_1 = false;
    var selectedObj_tv = false;
    var selectedObj_painting = false;
    var selectedObj_cabinet1=false;
    var selectedObj_cabinet2=false;
    var selectedObj_aboveoven1=false;
    var selectedObj_bathtube1=false;
    var selectedObj_toilet1=false;
    var selectedObj_sink3=false;
    var selectedObj_treasurechest=false;
    var selectedObj_carpet1=false;
    var selectedObj_carpet2=false;
    var selectedObj_lampbathroom=false;
    var selectedObj_clothesrack1=false;
    var selectedObj_treasurechest2=false;
    var selectedObj_nightstand1=false;
    var selectedObj_nightstand2=false;


    document.onkeydown = function(evt) {
      if (evt.keyCode == 27) {
	      selectedObj_clothesrack1= false;
        clothesrack1_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
	      selectedObj_smalltable= false;
        smalltable_mesh.material.color = new THREE.Color(1, 1, 1);
	      selectedObj_lampbathroom= false;
        lampbathroom_mesh.material.color = new THREE.Color(1, 0.8, 0);
	      selectedObj_carpet2= false;
        carpet2_mesh.material.color = new THREE.Color(0, 0.75, 0.65);
	      selectedObj_carpet1 = false;
        carpet1_mesh.material.color = new THREE.Color(0, 0.75, 0.65);
	      selectedObj_bathtube1 = false;
        bathtube1_mesh.material.color = new THREE.Color(0, 0.75, 0.65);
	      selectedObj_toilet1 = false;
        toilet1_mesh.material.color = new THREE.Color(1, 1, 1);
	      selectedObj_sink3 = false;
        sink3_mesh.material.color = new THREE.Color(0.5, 0.5, 0.5);
	      selectedObj_treasurechest = false;
        treasurechest_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
	      selectedObj_treasurechest2 = false;
        treasurechest2_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
        selectedObj_bed = false;
        bed_mesh.material.color = new THREE.Color(1, 1, 1);
        selectedObj_car = false;
        car_mesh.material.color = new THREE.Color(0.6,0,0);
        selectedObj_shelf = false;
        shelf_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
	      selectedObj_bookshelf = false;
        bookshelf_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
        selectedObj_fridge = false;
        fridge_mesh.material.color = new THREE.Color(1, 1, 1);
        selectedObj_lamp = false;
        lamp_mesh.material.color = new THREE.Color(1, 0.8, 0);
        selectedObj_dishwasher = false;
        dishwasher_mesh.material.color = new THREE.Color(0.5, 0.5, 0.5);
        selectedObj_sink= false;
        sink_mesh.material.color = new THREE.Color(0.5, 0.5, 0.5);
        selectedObj_stove= false;
        stove_mesh.material.color = new THREE.Color(0.5, 0.5, 0.5);
        selectedObj_table = false;
        table_mesh.material.color = new THREE.Color(0, 0.75, 0.65);
        selectedObj_chair_1 = false;
        chair_mesh_1.material.color = new THREE.Color(1, 1, 1);
        selectedObj_chair_2 = false;
        chair_mesh_2.material.color = new THREE.Color(1, 1, 1);
	      selectedObj_fancychair1 = false;
        fancychair1_mesh.material.color = new THREE.Color(1, 0.647, 0);
        selectedObj_fancychair2 = false;
        fancychair2_mesh.material.color = new THREE.Color(1, 0.647, 0);
        selectedObj_lamp_1 = false;
        lamp_mesh_1.material.color = new THREE.Color(1, 0.8, 0);
        selectedObj_tv = false;
        tv_mesh.material.color = new THREE.Color(0.5, 0.5, 0.5);
        selectedObj_painting = false;
        painting_mesh.material.color = new THREE.Color(0.8, 0.5, 0.8);
	      selectedObj_nightstand1 = false;
        nightstand1_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
	      selectedObj_nightstand2 = false;
        nightstand2_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
      }
    };


    function onDocumentMouseDown(event) {

      var mouse = new THREE.Vector2;
      mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
      mouse.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      var intersects = raycaster.intersectObjects(scene.children, false);

      if (intersects.length > 0) {
        //Bed selector

        if ((intersects[0].object.name == "loaded_mesh") && (!selectedObj_bed)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_bed = true;
        }
        if ((intersects[0].object.name != "loaded_mesh") && (selectedObj_bed)) {
          var pos = intersects[0].point;
          var oldx = bed_mesh.position.x;
          var oldz = bed_mesh.position.z;
          bed_mesh.position.x = pos.x;
          bed_mesh.position.z = pos.z;
          if(computeCollision(bed_mesh)){
            bed_mesh.position.x = oldx;
            bed_mesh.position.z = oldz;
          }
          else{
            console.log("Item placed");
            bed_mesh.material.color = new THREE.Color(1, 1, 1);
            selectedObj_bed = false;
          }          
        }

        //Car selector

        if ((intersects[0].object.name == "loaded_mesh_1") && (!selectedObj_car)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_car = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_1") && (selectedObj_car) && (!computeCollision(car_mesh))) {
          car_mesh.material.color = new THREE.Color(0.6,0,0);
          var pos = intersects[0].point;
          console.log("Item placed");
          car_mesh.position.x = pos.x;
          car_mesh.position.z = pos.z;
          selectedObj_car = false;
        }

        //Shelf selector

        if ((intersects[0].object.name == "loaded_mesh_2") && (!selectedObj_shelf)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_shelf = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_2") && (selectedObj_shelf)) {
          shelf_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
          var pos = intersects[0].point;
          console.log("Item placed");
          shelf_mesh.position.x = pos.x;
          shelf_mesh.position.z = pos.z;
          selectedObj_shelf = false;
        }

	   //bookshelf extraroom selector

        if ((intersects[0].object.name == "loaded_mesh_O") && (!selectedObj_bookshelf)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_bookshelf = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_O") && (selectedObj_bookshelf)) {
          bookshelf_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
          var pos = intersects[0].point;
          console.log("Item placed");
          bookshelf_mesh.position.x = pos.x;
          bookshelf_mesh.position.z = pos.z;
          selectedObj_bookshelf = false;
        }

        //Fridge selector

        if ((intersects[0].object.name == "loaded_mesh_3") && (!selectedObj_fridge)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_fridge = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_3") && (selectedObj_fridge)) {
          fridge_mesh.material.color = new THREE.Color(1, 1, 1);
          var pos = intersects[0].point;
          console.log("Item placed");
          fridge_mesh.position.x = pos.x;
          fridge_mesh.position.z = pos.z;
          selectedObj_fridge = false;
        }

	   //Dishwasher selector

        if ((intersects[0].object.name == "loaded_mesh_A") && (!selectedObj_dishwasher)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_dishwasher = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_A") && (selectedObj_dishwasher)) {
          dishwasher_mesh.material.color = new THREE.Color(0.5,0.5,0.5);
          var pos = intersects[0].point;
          console.log("Item placed");
          dishwasher_mesh.position.x = pos.x;
          dishwasher_mesh.position.z = pos.z;
          selectedObj_dishwasher = false;
        }

	   //Sink selector

        if ((intersects[0].object.name == "loaded_mesh_B") && (!selectedObj_sink)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_sink = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_B") && (selectedObj_sink)) {
          sink_mesh.material.color = new THREE.Color(0.5,0.5,0.5);
          var pos = intersects[0].point;
          console.log("Item placed");
          sink_mesh.position.x = pos.x;
          sink_mesh.position.z = pos.z;
          selectedObj_sink= false;
        }

	    //Stove selector

        if ((intersects[0].object.name == "loaded_mesh_C") && (!selectedObj_stove)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_stove= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_C") && (selectedObj_stove)) {
          stove_mesh.material.color = new THREE.Color(0.5,0.5,0.5);
          var pos = intersects[0].point;
          console.log("Item placed");
          stove_mesh.position.x = pos.x;
          stove_mesh.position.z = pos.z;
          selectedObj_stove= false;
        }

	   //aboveoven1 selector

         if ((intersects[0].object.name == "loaded_mesh_Z") && (!selectedObj_aboveoven1)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_aboveoven1= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_Z") && (selectedObj_aboveoven1)) {
         aboveoven1_mesh.material.color = new THREE.Color(0.5,0.5,0.5);
          var pos = intersects[0].point;
          console.log("Item placed");
          aboveoven1_mesh.position.x = pos.x;
          aboveoven1_mesh.position.z = pos.z;
          selectedObj_aboveoven1= false;
        }

	   //cabinet1 selector

        if ((intersects[0].object.name == "loaded_mesh_D") && (!selectedObj_cabinet1)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_cabinet1= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_D") && (selectedObj_cabinet1)) {
          cabinet1_mesh.material.color = new THREE.Color(0.5,0.5,0.5);
          var pos = intersects[0].point;
          console.log("Item placed");
          cabinet1_mesh.position.x = pos.x;
          cabinet1_mesh.position.z = pos.z;
          selectedObj_cabinet1= false;
        }

	   //cabinet2 selector

        if ((intersects[0].object.name == "loaded_mesh_E") && (!selectedObj_cabinet2)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_cabinet2= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_E") && (selectedObj_cabinet2)) {
          cabinet2_mesh.material.color = new THREE.Color(0.5,0.5,0.5);
          var pos = intersects[0].point;
          console.log("Item placed");
          cabinet2_mesh.position.x = pos.x;
          cabinet2_mesh.position.z = pos.z;
          selectedObj_cabinet2= false;
        }


	  //bathtube1 selector

        if ((intersects[0].object.name == "loaded_mesh_F") && (!selectedObj_bathtube1)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_bathtube1= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_F") && (selectedObj_bathtube1)) {
          bathtube1_mesh.material.color = new THREE.Color(0, 0.75, 0.65);
          var pos = intersects[0].point;
          console.log("Item placed");
          bathtube1_mesh.position.x = pos.x;
          bathtube1_mesh.position.z = pos.z;
          selectedObj_bathtube1= false;
        }

	  //sink3 selector

        if ((intersects[0].object.name == "loaded_mesh_G") && (!selectedObj_sink3)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_sink3= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_G") && (selectedObj_sink3)) {
          sink3_mesh.material.color = new THREE.Color(0.5,0.5,0.5);
          var pos = intersects[0].point;
          console.log("Item placed");
          sink3_mesh.position.x = pos.x;
          sink3_mesh.position.z = pos.z;
          selectedObj_sink3= false;
        }

	   //toilet1 selector

        if ((intersects[0].object.name == "loaded_mesh_H") && (!selectedObj_toilet1)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_toilet1= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_H") && (selectedObj_toilet1)) {
          toilet1_mesh.material.color = new THREE.Color(1, 1, 1);
          var pos = intersects[0].point;
          console.log("Item placed");
          toilet1_mesh.position.x = pos.x;
          toilet1_mesh.position.z = pos.z;
          selectedObj_toilet1= false;
        }

	  //treasurechest bathroom selector

        if ((intersects[0].object.name == "loaded_mesh_I") && (!selectedObj_treasurechest)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_treasurechest= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_I") && (selectedObj_treasurechest)) {
          treasurechest_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
          var pos = intersects[0].point;
          console.log("Item placed");
          treasurechest_mesh.position.x = pos.x;
          treasurechest_mesh.position.z = pos.z;
          selectedObj_treasurechest= false;
        }

	  //treasurechest2 bedroom selector

        if ((intersects[0].object.name == "loaded_mesh_N") && (!selectedObj_treasurechest2)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_treasurechest2= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_N") && (selectedObj_treasurechest2)) {
          treasurechest2_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
          var pos = intersects[0].point;
          console.log("Item placed");
          treasurechest2_mesh.position.x = pos.x;
          treasurechest2_mesh.position.z = pos.z;
          selectedObj_treasurechest2= false;
        }

	  //nightstand1 bedroom selector

        if ((intersects[0].object.name == "loaded_mesh_S") && (!selectedObj_nightstand1)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_nightstand1= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_S") && (selectedObj_nightstand1)) {
          nightstand1_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
          var pos = intersects[0].point;
          console.log("Item placed");
          nightstand1_mesh.position.x = pos.x;
          nightstand1_mesh.position.z = pos.z;
          selectedObj_nightstand1= false;
        }

	  //nightstand2 bedroom selector

        if ((intersects[0].object.name == "loaded_mesh_T") && (!selectedObj_nightstand2)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_nightstand2= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_T") && (selectedObj_nightstand2)) {
          nightstand2_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
          var pos = intersects[0].point;
          console.log("Item placed");
          nightstand2_mesh.position.x = pos.x;
          nightstand2_mesh.position.z = pos.z;
          selectedObj_nightstand2= false;
        }

	   //carpet1 selector

        if ((intersects[0].object.name == "loaded_mesh_J") && (!selectedObj_carpet1)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_carpet1= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_J") && (selectedObj_carpet1)) {
          carpet1_mesh.material.color = new THREE.Color(0,1,1);
          var pos = intersects[0].point;
          console.log("Item placed");
          carpet1_mesh.position.x = pos.x;
          carpet1_mesh.position.z = pos.z;
          selectedObj_carpet1= false;
        }

	  //carpet2 selector

        if ((intersects[0].object.name == "loaded_mesh_K") && (!selectedObj_carpet2)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_carpet2= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_K") && (selectedObj_carpet2)) {
          carpet2_mesh.material.color = new THREE.Color(0,1,1);
          var pos = intersects[0].point;
          console.log("Item placed");
          carpet2_mesh.position.x = pos.x;
          carpet2_mesh.position.z = pos.z;
          selectedObj_carpet2= false;
        }

	    //lampbathroom selector

        if ((intersects[0].object.name == "loaded_mesh_L") && (!selectedObj_lampbathroom)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_lampbathroom = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_L") && (selectedObj_lampbathroom)) {
          lampbathroom_mesh.material.color = new THREE.Color(1, 0.8, 0);
          var pos = intersects[0].point;
          console.log("Item placed");
          lampbathroom_mesh.position.x = pos.x;
          lampbathroom_mesh.position.z = pos.z;
          selectedObj_lampbathroom = false;
        }

	  //clothesrack1 selector

        if ((intersects[0].object.name == "loaded_mesh_M") && (!selectedObj_clothesrack1)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_clothesrack1= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_M") && (selectedObj_clothesrack1)) {
          clothesrack1_mesh.material.color = new THREE.Color(0.6, 0.3, 0.2);
          var pos = intersects[0].point;
          console.log("Item placed");
          clothesrack1_mesh.position.x = pos.x;
          clothesrack1_mesh.position.z = pos.z;
          selectedObj_clothesrack1= false;
        }

        //Lamp selector

        if ((intersects[0].object.name == "loaded_mesh_4") && (!selectedObj_lamp)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_lamp = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_4") && (selectedObj_lamp)) {
          lamp_mesh.material.color = new THREE.Color(1, 0.8, 0);
          var pos = intersects[0].point;
          console.log("Item placed");
          lamp_mesh.position.x = pos.x;
          lamp_mesh.position.z = pos.z;
          selectedObj_lamp = false;
        }

        //Table selector

        if ((intersects[0].object.name == "loaded_mesh_5") && (!selectedObj_table)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_table = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_5") && (selectedObj_table)) {
          table_mesh.material.color = new THREE.Color(0, 0.75, 0.65);
          var pos = intersects[0].point;
          console.log("Item placed");
          table_mesh.position.x = pos.x;
          table_mesh.position.z = pos.z;
          selectedObj_table = false;
        }

	   //smalltable extraroom selector

        if ((intersects[0].object.name == "loaded_mesh_R") && (!selectedObj_smalltable)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_smalltable= true;
        }
        if ((intersects[0].object.name != "loaded_mesh_R") && (selectedObj_smalltable)) {
          smalltable_mesh.material.color = new THREE.Color(1, 1, 1);
          var pos = intersects[0].point;
          console.log("Item placed");
          smalltable_mesh.position.x = pos.x;
          smalltable_mesh.position.z = pos.z;
          selectedObj_smalltable= false;
        }

        //Chair_1 selector

        if ((intersects[0].object.name == "loaded_mesh_6") && (!selectedObj_chair_1)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_chair_1 = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_6") && (selectedObj_chair_1)) {
          chair_mesh_1.material.color = new THREE.Color(1, 1, 1);
          var pos = intersects[0].point;
          console.log("Item placed");
          chair_mesh_1.position.x = pos.x;
          chair_mesh_1.position.z = pos.z;
          selectedObj_chair_1 = false;
        }

        //Chair_2 selector

        if ((intersects[0].object.name == "loaded_mesh_7") && (!selectedObj_chair_2)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_chair_2 = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_7") && (selectedObj_chair_2)) {
          chair_mesh_2.material.color = new THREE.Color(1, 1, 1);
          var pos = intersects[0].point;
          console.log("Item placed");
          chair_mesh_2.position.x = pos.x;
          chair_mesh_2.position.z = pos.z;
          selectedObj_chair_2 = false;
        }

	   //fancychair1 extraroom selector

        if ((intersects[0].object.name == "loaded_mesh_P") && (!selectedObj_fancychair1)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_fancychair1 = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_P") && (selectedObj_fancychair1)) {
          fancychair1_mesh.material.color = new THREE.Color(1, 0.647, 0);
          var pos = intersects[0].point;
          console.log("Item placed");
          fancychair1_mesh.position.x = pos.x;
          fancychair1_mesh.position.z = pos.z;
          selectedObj_fancychair1 = false;
        }

        //fancychair2 selector

        if ((intersects[0].object.name == "loaded_mesh_Q") && (!selectedObj_fancychair2)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_fancychair2 = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_Q") && (selectedObj_fancychair2)) {
         fancychair2_mesh.material.color = new THREE.Color(1, 0.647, 0);
          var pos = intersects[0].point;
          console.log("Item placed");
          fancychair2_mesh.position.x = pos.x;
          fancychair2_mesh.position.z = pos.z;
          selectedObj_fancychair2 = false;
        }

        //Lamp_1 selector

        if ((intersects[0].object.name == "loaded_mesh_8") && (!selectedObj_lamp_1)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_lamp_1 = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_8") && (selectedObj_lamp_1)) {
          lamp_mesh_1.material.color = new THREE.Color(1, 0.8, 0);
          var pos = intersects[0].point;
          console.log("Item placed");
          lamp_mesh_1.position.x = pos.x;
          lamp_mesh_1.position.z = pos.z;
          selectedObj_lamp_1 = false;
        }

        //TV selector

        if ((intersects[0].object.name == "loaded_mesh_9") && (!selectedObj_tv)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_tv = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_9") && (selectedObj_tv)) {
          tv_mesh.material.color = new THREE.Color(0.5, 0.5, 0.5);
          var pos = intersects[0].point;
          console.log("Item placed");
          tv_mesh.position.x = pos.x;
          tv_mesh.position.z = pos.z;
          selectedObj_tv = false;
        }

        //Painting selector

        if ((intersects[0].object.name == "loaded_mesh_10") && (!selectedObj_painting)) {
          console.log("Item selected");
          intersects[0].object.material.color = new THREE.Color(1, 0.5, 0.5);
          selectedObj_painting = true;
        }
        if ((intersects[0].object.name != "loaded_mesh_10") && (selectedObj_painting)) {
          painting_mesh.material.color = new THREE.Color(0.8, 0.5, 0.8);
          var pos = intersects[0].point;
          console.log("Item placed");
          painting_mesh.position.x = pos.x;
          painting_mesh.position.z = pos.z;
          selectedObj_painting = false;
        }

      }
    }

    function computeCollision(firstObject){
      
      var objectsArray = [bed_mesh, lamp_mesh_1, treasurechest2_mesh, nightstand1_mesh, nightstand2_mesh, bookshelf_mesh, fancychair1_mesh,
                          fancychair2_mesh, smalltable_mesh, fridge_mesh, dishwasher_mesh, sink_mesh, stove_mesh, aboveoven1_mesh, cabinet1_mesh,
                          cabinet2_mesh, bathtube1_mesh, sink3_mesh, toilet1_mesh, treasurechest_mesh, carpet1_mesh, carpet2_mesh, lampbathroom_mesh,
                          clothesrack1_mesh, lamp_mesh, shelf_mesh, table_mesh, chair_mesh_1, chair_mesh_2, tv_mesh, painting_mesh, car_mesh];
            
      var firstBB = new THREE.Box3().setFromObject(firstObject);

      for(i = 0; i < objectsArray.length; i++){
        if(objectsArray[i] != firstObject){
          var secondBB = new THREE.Box3().setFromObject(objectsArray[i]);
          var collision = firstBB.intersectsBox(secondBB);
          if(collision){
            return true;
          }
        }
      }   
      return false;        
    }

    //This allows to capture the clicks of the mouse for moving elements
    document.addEventListener('mousedown', onDocumentMouseDown, false);