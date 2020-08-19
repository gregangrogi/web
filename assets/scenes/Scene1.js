
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var cat = this.add.image(200.0, 200.0, "textures", "cat");
		cat.setScale(0.3, 0.3);
		
		var SPIKE = this.add.image(298.6962, 222.1379, "textures", "plat");
		SPIKE.setScale(0.1, 2.1);
		
		var SPIKE_1 = this.add.image(105.045815, 301.35403, "textures", "plat");
		SPIKE_1.setScale(0.1, 3.0);
		
		var SPIKE_2 = this.add.image(626.6372, 394.74985, "textures", "plat");
		SPIKE_2.setScale(1.0, 0.3);
		
		var SPIKE_3 = this.add.image(592.8804, 582.13275, "textures", "plat");
		SPIKE_3.setScale(1.7, 0.3);
		
		var SPIKE_4 = this.add.image(1078.7241, 304.9948, "textures", "plat");
		SPIKE_4.setScale(0.1, 3.0);
		
		var SPIKE_5 = this.add.image(893.9246, 203.67546, "textures", "plat");
		SPIKE_5.setScale(0.1, 2.1);
		
		var SPIKE_6 = this.add.image(959.9049, 0.0, "textures", "plat");
		SPIKE_6.setScale(3.2, 0.3);
		
		var finish = this.add.image(979.0, 75.0, "textures", "finish");
		finish.setScale(0.3, 0.3);
		
		var SPIKE_7 = this.add.image(960.0, 1080.0, "textures", "plat");
		SPIKE_7.setScale(3.2, 0.3);
		
		var SPIKE_8 = this.add.image(960.0, 2160.0, "textures", "plat");
		SPIKE_8.setScale(3.2, 0.3);
		
		var SPIKE_9 = this.add.image(73.32293, 1622.5181, "textures", "plat");
		SPIKE_9.setScale(0.1, 5.5);
		
		var SPIKE_10 = this.add.image(600.1697, 1704.0768, "textures", "plat");
		SPIKE_10.setScale(1.7, 0.3);
		
		var SPIKE_11 = this.add.image(775.59564, 1885.9155, "textures", "plat");
		SPIKE_11.setScale(1.7, 0.3);
		
		var SPIKE_12 = this.add.image(1305.7478, 1817.1085, "textures", "plat");
		SPIKE_12.setScale(0.1, 3.5);
		
		var SPIKE_13 = this.add.image(804.21466, 1487.0441, "textures", "plat");
		SPIKE_13.setScale(1.6, 0.3);
		
		var SPIKE_14 = this.add.image(359.5864, 1292.5623, "textures", "plat");
		SPIKE_14.setScale(0.1, 2.0);
		
		var finish_1 = this.add.image(1174.2463, 2038.708, "textures", "finish");
		finish_1.setScale(0.3, 0.3);
		
		this.fCat = cat;
		this.fSPIKE = SPIKE;
		this.fSPIKE_1 = SPIKE_1;
		this.fSPIKE_2 = SPIKE_2;
		this.fSPIKE_3 = SPIKE_3;
		this.fSPIKE_4 = SPIKE_4;
		this.fSPIKE_5 = SPIKE_5;
		this.fSPIKE_6 = SPIKE_6;
		this.fFinish = finish;
		this.fSPIKE_7 = SPIKE_7;
		this.fSPIKE_8 = SPIKE_8;
		this.fSPIKE_9 = SPIKE_9;
		this.fSPIKE_10 = SPIKE_10;
		this.fSPIKE_11 = SPIKE_11;
		this.fSPIKE_12 = SPIKE_12;
		this.fSPIKE_13 = SPIKE_13;
		this.fSPIKE_14 = SPIKE_14;
		this.fFinish_1 = finish_1;
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/* START-USER-CODE */

	create() {
		this._create();
		this.arrows = this.input.keyboard.createCursorKeys();
		this.kills = [this.fSPIKE, this.fSPIKE, this.fSPIKE_1, this.fSPIKE_2, 
		this.fSPIKE_3, this.fSPIKE_4, this.fSPIKE_5, this.fSPIKE_6, this.fSPIKE_7, 
		this.fSPIKE_8, this.fSPIKE_9, this.fSPIKE_10, this.fSPIKE_12, this.fSPIKE_13,
		this.fSPIKE_14]
		this.physics.add.existing(this.fCat);
		this.physics.add.existing(this.fFinish);
		this.physics.add.overlap(this.fCat, this.fFinish, this.win, null, this);
		let i = 0;
		while (i < 15) { 
  			
  			i++;
			this.physics.add.existing(this.kills[i-1]);
			this.physics.add.overlap(this.fCat, this.kills[i-1], this.hit, null, this);
		}
		
		
	}
	hit(){
		
		this.fCat.x = 200;
		this.fCat.y = 200;
		
	}
	win (){
		this.fCat.x = 200;
		this.fCat.y = 200;
		
			this.fSPIKE.y -= 1080;
			this.fSPIKE.y-= 1080;
			this.fSPIKE_1.y -= 1080;
			this.fSPIKE_2.y -= 1080;
			this.fSPIKE_3.y -= 1080;
			this.fSPIKE_4.y -= 1080;
			this.fSPIKE_5.y -= 1080;
			this.fSPIKE_6.y -= 1080;
			this.fFinish.y -= 1080;
			this.fSPIKE_7.y -= 1080;
			this.fSPIKE_8.y -= 1080;
			this.fSPIKE_9.y -= 1080; 
			this.fSPIKE_10.y -= 1080; 
			this.fSPIKE_11.y -= 1080; 
			this.fSPIKE_12.y -= 1080;
			this.fSPIKE_13.y -= 1080; 
			this.fSPIKE_14.y -= 1080; 
			this.fFinish_1.y -= 1080;
		
	}
	update() {
		if (this.arrows.right.isDown){
			this.fCat.x += 4;
		}
		else if (this.arrows.left.isDown){
			this.fCat.x -= 4;
		}
		if (this.arrows.down.isDown){
			this.fCat.y += 4;
		}
		else if (this.arrows.up.isDown){
			this.fCat.y -= 4;
		}
		
	}
		
	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
