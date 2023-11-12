//pressing the key
function keyDown(eventInformation) {

	switch (eventInformation.key) {
		case "w":
			
			if ((orlando.isFalling || orlando.antiGravityForce > 0) && orlando.facingDirection === -1) {
				return;
				orlando.startJump = true;
				orlando.setCurrentAnimationByName("jumping_left"); 
				
				//jumping left 
			} else if((orlando.isFalling || orlando.antiGravityForce > 0) && orlando.facingDirection === 1) {
				return;
					orlando.startJump = true;
					orlando.setCurrentAnimationByName("jumping_right");
					 }
					else
					orlando.startJump = true;
			//jumping right
			break;
	
		case "a": 
		    orlando.facingDirection = -1;
			if (orlando.moveBy.left != 0 || orlando.moveBy.top != 0) {
				return;
			}
			orlando.moveBy.top = 0;
			orlando.moveBy.left = -orlando.moveVelocity;
			orlando.setCurrentAnimationByName("walk_left");
			//move left
			break;
		case "d":
			orlando.facingDirection = 1;
			if (orlando.moveBy.left != 0 || orlando.moveBy.top != 0) {
				return;
			}
			orlando.moveBy.top = 0;
			orlando.moveBy.left = orlando.moveVelocity;
			orlando.setCurrentAnimationByName("walk_right");
			//move right
			break;
	}
}
window.addEventListener("keydown", keyDown);

//key lifts up after pressing 
function keyUp(eventInformation) {
	switch (eventInformation.key) {
		case "w":
			if (orlando.facingDirection === 1) {
			orlando.moveBy.top = 0;
			orlando.moveBy.left = 0;
			orlando.setCurrentAnimationByName("idle_jumping_right");
			 }
			 
			//jumping right
			else if 
				(orlando.facingDirection === -1) {
				orlando.moveBy.top = 0;
			    orlando.moveBy.left = 0;
                orlando.setCurrentAnimationByName("idle_jumping_left");
			}
			//jumping left
			case "a":
			orlando.moveBy.top = 0;
			orlando.moveBy.left = 0;
			orlando.setCurrentAnimationByName("idle_left");
			//move left
			break;
		case "d":
			orlando.moveBy.top = 0;
			orlando.moveBy.left = 0;
			orlando.setCurrentAnimationByName("idle_right");
			//move right
			break;
		case "x":
			gameManager.debugMode = !gameManager.debugMode;
	}

}

window.addEventListener("keyup", keyUp);
