
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
		
		this.fCat = cat;
		this.fSPIKE = SPIKE;
		this.fSPIKE_1 = SPIKE_1;
		this.fSPIKE_2 = SPIKE_2;
		this.fSPIKE_3 = SPIKE_3;
		this.fSPIKE_4 = SPIKE_4;
		this.fSPIKE_5 = SPIKE_5;
		
	}
	
	
	
	
	
	
	
	
	/* START-USER-CODE */

	create() {
		this._create();
		this.arrows = this.input.keyboard.createCursorKeys();
		this.physics.add.existing(this.fCat);
		this.physics.add.existing(this.fSPIKE);
		this.physics.add.existing(this.fSPIKE_1);
		this.physics.add.existing(this.fSPIKE_2);
		this.physics.add.existing(this.fSPIKE_3);
		this.physics.add.existing(this.fSPIKE_4);
		this.physics.add.existing(this.fSPIKE_5);
		
		this.physics.add.overlap(this.fCat, this.fSPIKE, this.hit, null, this);
		this.physics.add.overlap(this.fCat, this.fSPIKE_1, this.hit, null, this);
		this.physics.add.overlap(this.fCat, this.fSPIKE_2, this.hit, null, this);
		this.physics.add.overlap(this.fCat, this.fSPIKE_3, this.hit, null, this);
		this.physics.add.overlap(this.fCat, this.fSPIKE_4, this.hit, null, this);
		this.physics.add.overlap(this.fCat, this.fSPIKE_5, this.hit, null, this);
		
	}
	hit(){
		
		this.fCat.x = 200;
		this.fCat.y = 200;
		
	}
	win (){
		
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
