$(document).ready(function(){
	/* Dog Face */
	var elem = document.getElementById('doodle');
	var two = new Two({fullscreen: false}).appendTo(elem);
	var position = new Two.Vector(two.width/2, two.height/2);
	var head = two.makeCircle(position.x, position.y, 100);
	head.fill = '#52C5DC';
	head.noStroke();

	var nose;
	nose = two.makeCircle(position.x, position.y-30, 32);
	nose.fill = '#EFB8D2';
	nose.noStroke();

	var lefteye;
	lefteye = two.makeCircle(position.x-42, position.y+26, 32);
	lefteye.fill = '#FFFFFF';
	lefteye.noStroke();

	var pupilLeft;
	pupilLeft = two.makeCircle(position.x-42,position.y+26, 20);
	pupilLeft.fill = '#7FC35E';
	pupilLeft.noStroke();

	var leftear;
	leftear = two.makeEllipse(position.x+100, position.y+80, 26, 46);
	leftear.fill = '#52C5Dc';
	leftear.noStroke();
	leftear.rotation = Math.PI / 4;

	var rightEye;
	rightEye = two.makeCircle(position.x+42, position.y+26, 32);
	rightEye.fill='#FFFFFF';
	rightEye.noStroke();

	var pupilRight;
	pupilRight = two.makeCircle(position.x+42, position.y+26, 20);
	pupilRight.fill = '#7FC35E';
	pupilRight.noStroke();

	var rightEar;
	rightEar = two.makeEllipse(position.x-100,position.y+80, 26, 46);
	rightEar.fill = '#52C5Dc';
	rightEar.noStroke();
	rightEar.rotation = -Math.PI / 4;

	var tongue;
	tongue = two.makePolygon(0,0,  100,0,  100,0,  90,58,  50,80,  10,58,  0,0);
	tongue.curved = true;
	tongue.fill = '#EE3E36';
	tongue.noStroke();
	tongue.translation.x = position.x+40;
	tongue.translation.y = position.y-86;
	tongue.scale = 0.3;
	tongue.rotation = Math.PI / 5;
	tongue.noStroke();

	two.update();


	/* tigger Face */
	var elem2 = document.getElementById('doodle2');
	var one = new Two({fullscreen: false}).appendTo(elem2);
	var postion2 = new Two.Vector(one.width/2, one.height/2);
	var tiggerHead = one.makeCircle(position.x, position.y, 100);
	tiggerHead.fill = 'yellow';
	tiggerHead.noStroke();


	var tiggerNoies = one.makeCircle(position.x, position.y+40, 32);
	tiggerNoies.fill= '#7FC35E';
	tiggerNoies.noStroke();

	var tiggerlefteye;
	tiggerlefteye = one.makeCircle(position.x+42, position.y-26, 30);
	tiggerlefteye.fill = '#FFFFFF';
	tiggerlefteye.noStroke();

	var tiggerrightEye;
	tiggerrightEye = one.makeCircle(position.x-42, position.y-26, 30);
	tiggerrightEye.fill='#FFFFFF';
	tiggerrightEye.noStroke();


	var tiggerleftear;
	tiggerleftear = one.makeRectangle(position.x-60, position.y-75, 40, 50);
	tiggerleftear.fill = 'yellow';
	tiggerleftear.noStroke();
	tiggerleftear.rotation = Math.PI / 2;
	var tiggerrightEar;
	tiggerrightEar = one.makeRectangle(position.x+60,position.y-75, 40, 50);
	tiggerrightEar.fill = 'yellow';
	tiggerrightEar.noStroke();
	tiggerrightEar.rotation = -Math.PI / 2;

	var tiggerpupilLeft;
	tiggerpupilLeft = one.makeCircle(position.x+42,position.y+20, 20);
	tiggerpupilLeft.fill = '#7FC35E';
	tiggerpupilLeft.noStroke();

	var tiggerpupilRight;
	tiggerpupilRight = one.makeCircle(position.x-42, position.y+20, 20);
	tiggerpupilRight.fill = '#7FC35E';
	tiggerpupilRight.noStroke();

	one.update();

	var group = two.makeGroup(head, nose, lefteye, pupilLeft ,leftear ,rightEye, pupilRight, rightEar, tongue);
	group.translation.set(two.width, two.height);
	group.scale = 0;
	group.noStroke();

	// Bind a function to scale and rotate the group
	// to the animation loop.
	two.bind('update', function(frameCount) {
	  // This code is called everytime two.update() is called.
	  // Effectively 60 times per second.
	  if (group.scale > 1) {
	    group.scale = group.rotation = 2;
	  }
	  var t = (1 - group.scale) * 0.0325;
	  group.scale += t;
	  group.rotation += t * 1 * Math.PI;
	}).play(); 

	var groupTwo = one.makeGroup(tiggerpupilLeft, tiggerpupilRight);
	groupTwo.translation.set(one.width, one.height);
	groupTwo.scale = 0;
	groupTwo.noStroke();

	// Bind a function to scale and rotate the groupTwo
	// to the animation loop.
	one.bind('update', function(frameCount) {
	  // This code is called everytime one.update() is called.
	  // Effectively 60 times per second.
	  if (groupTwo.scale > .9999999) {
	    groupTwo.scale = groupTwo.rotation = 0;
	  }
	  var t = (1 - groupTwo.scale) * 0.1325;
	  groupTwo.scale += t;
	  groupTwo.rotation += t * 1 * Math.PI;
	}).play(); 
});





