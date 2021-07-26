var count = 0;

function launch(){
    if(keyWentDown("space") && count == 0){
        Matter.Body.setPosition(b[0].body,{x: c.x, y: c.y+(c.height*c.scale/2)});
        Matter.Body.setStatic(b[0].body,false);
		count++;
        bleft = bleft-1;
    }
    if(keyWentDown("space") && count == 1 && b[0].visibility == "false"){
        Matter.Body.setPosition(b[1].body,{x: c.x, y: c.y+(c.height*c.scale/2)});
        Matter.Body.setStatic(b[1].body,false);
		count++;
        bleft = bleft-1;
    }
    if(keyWentDown("space") && count== 2 && b[1].visibility == "false"){
        Matter.Body.setPosition(b[2].body,{x: c.x, y: c.y+(c.height*c.scale/2)});
        Matter.Body.setStatic(b[2].body,false);
		count++;
        bleft = bleft-1;
    }
    if(keyWentDown("space") && count== 3 && b[2].visibility == "false"){
        Matter.Body.setPosition(b[3].body,{x: c.x, y: c.y+(c.height*c.scale/2)});
        Matter.Body.setStatic(b[3].body,false);
		count++;
        bleft = bleft-1;
    }
    if(keyWentDown("space") && count== 4 && b[3].visibility == "false"){
        Matter.Body.setPosition(b[4].body,{x: c.x, y: c.y+(c.height*c.scale/2)});
        Matter.Body.setStatic(b[4].body,false);
		count++;
        bleft = bleft-1;
    }
    if(keyWentDown("space") && count== 5 && b[4].visibility == "false"){
        Matter.Body.setPosition(b[5].body,{x: c.x, y: c.y+(c.height*c.scale/2)});
        Matter.Body.setStatic(b[5].body,false);
		count++;
        bleft = bleft-1;
    }
    if(keyWentDown("space") && count== 6 && b[5].visibility == "false"){
        Matter.Body.setPosition(b[6].body,{x: c.x, y: c.y+(c.height*c.scale/2)});
        Matter.Body.setStatic(b[6].body,false);
		count++;
        bleft = bleft-1;
    }
    if(keyWentDown("space") && count== 7 && b[6].visibility == "false"){
        Matter.Body.setPosition(b[7].body,{x: c.x, y: c.y+(c.height*c.scale/2)});
        Matter.Body.setStatic(b[7].body,false);
		count++;
        bleft = bleft-1;
    }
    if(keyWentDown("space") && count== 8 && b[7].visibility == "false"){
        Matter.Body.setPosition(b[8].body,{x: c.x, y: c.y+(c.height*c.scale/2)});
        Matter.Body.setStatic(b[8].body,false);
		count++;
        bleft = bleft-1;
    }
    if(keyWentDown("space") && count== 9 && b[8].visibility == "false"){
        Matter.Body.setPosition(b[9].body,{x: c.x, y: c.y+(c.height*c.scale/2)});
        Matter.Body.setStatic(b[9].body,false);
		count++;
        bleft = bleft-1;
    }
}