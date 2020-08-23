
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
		
		var SPIKE_8 = this.add.image(960.0, 3240.0, "textures", "plat");
		SPIKE_8.setScale(3.2, 0.3);
		
		var SPIKE_9 = this.add.image(83.32738, 3240.0, "textures", "plat");
		SPIKE_9.setScale(0.1, 22.0);
		
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
		
		var SPIKE_15 = this.add.image(960.0, 2160.0, "textures", "plat");
		SPIKE_15.setScale(3.2, 0.3);
		
		var SPIKE_16 = this.add.image(391.79785, 2472.004, "textures", "plat");
		SPIKE_16.setScale(0.1, 3.0);
		
		var red = this.add.image(976.6178, 2859.2192, "textures", "red");
		red.setScale(0.3, 1.3);
		
		var SPIKE_17 = this.add.image(881.6593, 2748.351, "textures", "plat");
		SPIKE_17.setScale(1.7, 0.3);
		
		var SPIKE_18 = this.add.image(1896.8704, 3240.0, "textures", "plat");
		SPIKE_18.setScale(0.1, 22.0);
		
		var red_1 = this.add.image(983.77936, 2293.6672, "textures", "red");
		red_1.setScale(0.3, 1.3);
		
		var finish_2 = this.add.image(628.0719, 2452.4917, "textures", "finish");
		finish_2.setScale(0.3, 0.3);
		
		var SPIKE_19 = this.add.image(960.0, 4320.0, "textures", "plat");
		SPIKE_19.setScale(3.2, 0.3);
		
		var SPIKE_20 = this.add.image(960.0, 5400.0, "textures", "plat");
		SPIKE_20.setScale(3.2, 0.3);
		
		var SPIKE_21 = this.add.image(395.70654, 3694.0112, "textures", "plat");
		SPIKE_21.setScale(0.1, 4.3);
		
		var SPIKE_23 = this.add.image(623.40063, 3949.3167, "textures", "plat");
		SPIKE_23.setScale(0.8, 0.3);
		
		var SPIKE_24 = this.add.image(628.55347, 4225.196, "textures", "plat");
		SPIKE_24.setScale(0.1, 1.0);
		
		var SPIKE_25 = this.add.image(832.70154, 3927.8455, "textures", "plat");
		SPIKE_25.setScale(0.1, 2.0);
		
		var SPIKE_22 = this.add.image(1063.51, 4095.4106, "textures", "plat");
		SPIKE_22.setScale(0.8, 0.3);
		
		var SPIKE_26 = this.add.image(1546.4601, 4113.275, "textures", "plat");
		SPIKE_26.setScale(0.1, 2.0);
		
		var SPIKE_27 = this.add.image(1327.9408, 3901.128, "textures", "plat");
		SPIKE_27.setScale(0.8, 0.3);
		
		var SPIKE_28 = this.add.image(1128.9559, 3715.1023, "textures", "plat");
		SPIKE_28.setScale(0.1, 2.0);
		
		var SPIKE_29 = this.add.image(629.86176, 3649.892, "textures", "plat");
		SPIKE_29.setScale(0.1, 1.5);
		
		var SPIKE_30 = this.add.image(900.5985, 3535.608, "textures", "plat");
		SPIKE_30.setScale(0.8, 0.3);
		
		var red_2 = this.add.image(1221.4174, 3939.5208, "textures", "red");
		red_2.setScale(0.3, 1.0);
		
		var finish_3 = this.add.image(1727.9949, 4133.4106, "textures", "finish");
		finish_3.setScale(0.3, 0.3);
		
		
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
		this.fSPIKE_15 = SPIKE_15;
		this.fSPIKE_16 = SPIKE_16;
		this.fRed = red;
		this.fSPIKE_17 = SPIKE_17;
		this.fSPIKE_18 = SPIKE_18;
		this.fRed_1 = red_1;
		this.fFinish_2 = finish_2;
		this.fSPIKE_19 = SPIKE_19;
		this.fSPIKE_20 = SPIKE_20;
		this.fSPIKE_21 = SPIKE_21;
		this.fSPIKE_23 = SPIKE_23;
		this.fSPIKE_24 = SPIKE_24;
		this.fSPIKE_25 = SPIKE_25;
		this.fSPIKE_22 = SPIKE_22;
		this.fSPIKE_26 = SPIKE_26;
		this.fSPIKE_27 = SPIKE_27;
		this.fSPIKE_28 = SPIKE_28;
		this.fSPIKE_29 = SPIKE_29;
		this.fSPIKE_30 = SPIKE_30;
		this.fRed_2 = red_2;
		this.fFinish_3 = finish_3;
		
	}
	
	/* START-USER-CODE */

	create() {
		this.pl1 = this.add.image(200.0, 200.0, "textures", "cat");
		this.pl1.setScale(0.3, 0.3);
		this._create();
		this.arrows = this.input.keyboard.createCursorKeys();
		this.kills = [this.fRed, this.fRed_1, this.fRed_2, this.fSPIKE, this.fSPIKE, this.fSPIKE_1, this.fSPIKE_2, 
		this.fSPIKE_3, this.fSPIKE_4, this.fSPIKE_5, this.fSPIKE_6, this.fSPIKE_7, 
		this.fSPIKE_8, this.fSPIKE_9, this.fSPIKE_10, this.fSPIKE_11, this.fSPIKE_12, 
		this.fSPIKE_13, this.fSPIKE_14, this.fSPIKE_15, this.fSPIKE_16,
		this.fSPIKE_17, this.fSPIKE_18, this.fSPIKE_19, this.fSPIKE_20, this.fSPIKE_21, 
		this.fSPIKE_22, this.fSPIKE_23, this.fSPIKE_24, this.fSPIKE_25, this.fSPIKE_26, 
		this.fSPIKE_27, this.fSPIKE_28, this.fSPIKE_29, this.fSPIKE_30,]
		this.ud = [this.fRed]
		this.physics.add.existing(this.fCat);
		this.physics.add.existing(this.fFinish);
		this.physics.add.existing(this.fFinish_1);
		this.physics.add.existing(this.fFinish_2);
		this.physics.add.existing(this.fFinish_3);
		this.physics.add.overlap(this.fCat, this.fFinish, this.win, null, this);
		this.physics.add.overlap(this.fCat, this.fFinish_1, this.win, null, this);
		this.physics.add.overlap(this.fCat, this.fFinish_2, this.win, null, this);	
		this.physics.add.overlap(this.fCat, this.fFinish_3, this.win, null, this);	
		this.up = 1;
		this.util1 = 0;
		this.level = 1;
		this.createtext();
		let i = 0;
		while (i < 35) { 
  			
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
		this.level += 1;
		this.leveltext.setText("level" + this.level);
		
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
			this.fFinish_2.y -= 1080; 
			this.fFinish_3.y -= 1080; 
			this.fSPIKE_15.y -= 1080; 
			this.fSPIKE_16.y -= 1080;
			this.fSPIKE_17.y -= 1080; 
			this.fSPIKE_18.y -= 1080; 
			this.fRed.y -= 1080; 
			this.fRed_1.y -= 1080;
			this.fRed_2.y -= 1080;
			this.fSPIKE_19.y -= 1080;
			this.fSPIKE_20.y -= 1080;
			this.fSPIKE_21.y -= 1080; 
			this.fSPIKE_22.y -= 1080; 
			this.fSPIKE_23.y -= 1080;
			this.fSPIKE_24.y -= 1080;
			this.fSPIKE_25.y -= 1080;
			this.fSPIKE_26.y -= 1080; 
			this.fSPIKE_27.y -= 1080; 
			this.fSPIKE_28.y -= 1080;
			this.fSPIKE_29.y -= 1080;
			
	}
	createtext(){
		var style = {font: '50px Arial', fill: '#FFF'};
		this.leveltext = this.add.text(50, 50, "level" + this.level, style)
	}
	multiplay(pl, x, y){
		pl.x = x;
		pl.y = y;
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
		
		this.util1+= 1;
		if (this.util1 > 100){
			this.util1 = 0;
			this.up = -this.up;
		}
		let i = 0;
		this.fRed.y += this.up * 4;
		this.fRed_1.y += this.up * 4;
		this.fRed_2.y += this.up * 4;
	}
		
	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
