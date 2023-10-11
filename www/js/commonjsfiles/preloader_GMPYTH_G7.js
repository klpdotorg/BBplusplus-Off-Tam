Game.preloader_GMPYTH_G7 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_GMPYTH_G7.prototype = {
        preload: function () {

                this.load.video('GMPYTHG71', 'demoVideos/Gm-Pyth-G7-1.mp4');   //* include demo video of nsf-5 game.
                this.load.video('GMPYTHG72', 'demoVideos/Gm-Pyth-G7-2.mp4');   //* include demo video of nsf-5 game.

                this.load.image('skipArrow', 'assets/commonAssets/skipArrow.png');
              
                this.load.atlas('bulb', 'assets/commonAssets/bulb.png', null, GMPYTH_G7_JSON.bulbBtnJson);

                this.load.atlas('backbtn', 'assets/commonAssets/backbtn.png', null, GMPYTH_G7_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', 'assets/commonAssets/speaker.png', null, GMPYTH_G7_JSON.speakerJson);
                this.load.atlas('starAnim', 'assets/commonAssets/starAnim.png', null, GMPYTH_G7_JSON.starAnimJson);
                this.load.atlas('replay', 'assets/commonAssets/reply.png', null, GMPYTH_G7_JSON.replyJson);

                this.load.image('navBar', 'assets/commonAssets/navBar.png');
                this.load.image('timebg', 'assets/commonAssets/timebg.png');
                this.load.image('hand', 'assets/commonAssets/hand.png');

                this.load.atlas('CommonHomeBtn', 'assets/commonAssets/homeBtn.png', null, GMPYTH_G7_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn', 'assets/commonAssets/nextBtn.png', null, GMPYTH_G7_JSON.nextbtnJson);


                this.load.image('bg', 'assets/gradeAssets/GM-PYTH-G7/Bg.png');
                this.load.image('mainbord', 'assets/gradeAssets/GM-PYTH-G7/main bord.png');

                this.load.atlas('TickBtn', 'assets/gradeAssets/GM-PYTH-G7/TickBtn.png', null, GMPYTH_G7_JSON.TickbtnJson);

                this.load.image('BlueBg', 'assets/gradeAssets/GM-PYTH-G7/blue box.png');

                this.load.image('numpadbg', 'assets/gradeAssets/GM-PYTH-G7/numbg.png');
                this.load.atlas('Numberpad', 'assets/gradeAssets/GM-PYTH-G7/number pad.png', null, GMPYTH_G7_JSON.numberpadJson);

                //* Pyth game objs
                this.load.image('columnGrid', 'assets/gradeAssets/GM-PYTH-G7/new final.png');//new colum
                this.load.image('bgiPanel', 'assets/gradeAssets/GM-PYTH-G7/pnale_2.png');
                this.load.image('circlorange', 'assets/gradeAssets/GM-PYTH-G7/half circle orange.png');
                this.load.image('panel1', 'assets/gradeAssets/GM-PYTH-G7/pnale_1.png');
                this.load.atlas('greenbox', 'assets/gradeAssets/GM-PYTH-G7/green box.png', null, GMPYTH_G7_JSON.greenBoxJson);
                this.load.atlas('Orangebox', 'assets/gradeAssets/GM-PYTH-G7/Orange box.png', null, GMPYTH_G7_JSON.orangeBoxJson);
                this.load.atlas('pinkbox', 'assets/gradeAssets/GM-PYTH-G7/pink box.png', null, GMPYTH_G7_JSON.pinkBoxJson);
                this.load.image('bigBlue', 'assets/gradeAssets/GM-PYTH-G7/cross blue big.png');

                this.load.image('textBox1', 'assets/gradeAssets/GM-PYTH-G7/text box_1.png');
                this.load.atlas('thumbsUp', 'assets/gradeAssets/GM-PYTH-G7/thums Up.png', null, GMPYTH_G7_JSON.thumbsUp);
                this.load.atlas('thumbsDown', 'assets/gradeAssets/GM-PYTH-G7/thums down.png', null, GMPYTH_G7_JSON.thumbsDown);
                this.load.image('textbox2', 'assets/gradeAssets/GM-PYTH-G7/text box_2.png');

                this.load.image('greenCircle', 'assets/gradeAssets/GM-PYTH-G7/half circle green_1.1.png');
                this.load.image('greenLine', 'assets/gradeAssets/GM-PYTH-G7/half circle green_1.3.png');
                this.load.image('greenFilledCircle', 'assets/gradeAssets/GM-PYTH-G7/half circle.png');

                this.load.image('orangeCircle', 'assets/gradeAssets/GM-PYTH-G7/half circle orange_1.1.png');
                this.load.image('orangeLine', 'assets/gradeAssets/GM-PYTH-G7/half circle orange_1.3.png');
                this.load.image('orangeFilledCircle', 'assets/gradeAssets/GM-PYTH-G7/half circle orange.png');

                this.load.image('pinkCircle', 'assets/gradeAssets/GM-PYTH-G7/half circle pink_1.1.png');
                this.load.image('pinkLine', 'assets/gradeAssets/GM-PYTH-G7/half circle pink_1.3.png');
                this.load.image('pinkFilledCircle', 'assets/gradeAssets/GM-PYTH-G7/half circle pink.png');
                this.load.image('rectPanel', 'assets/gradeAssets/GM-PYTH-G7/pnale_3.png');
                //hexagon
                this.load.image('greenHexa', 'assets/gradeAssets/GM-PYTH-G7/hexagon green_1.1.png');
                this.load.image('greenXLine', 'assets/gradeAssets/GM-PYTH-G7/hexagon green_1.2.png');
                this.load.image('orangeHexa', 'assets/gradeAssets/GM-PYTH-G7/hexagon orange_1.1.png');
                this.load.image('orangeXLine', 'assets/gradeAssets/GM-PYTH-G7/hexagon orange_1.2.png');
                this.load.image('pinkHexa', 'assets/gradeAssets/GM-PYTH-G7/hexagon pink_1.1.png');
                this.load.image('pinkXLine', 'assets/gradeAssets/GM-PYTH-G7/hexagon pink_1.2.png');

                //equilateral
                this.load.image('greenLateral', 'assets/gradeAssets/GM-PYTH-G7/triangle green_1.1.png');
                this.load.image('greenEqLine', 'assets/gradeAssets/GM-PYTH-G7/triangle green_1.2.png');
                this.load.image('orangeLateral', 'assets/gradeAssets/GM-PYTH-G7/triangle orange_1.1.png');
                this.load.image('orangeEqLine', 'assets/gradeAssets/GM-PYTH-G7/triangle orange_1.2.png');
                this.load.image('pinkLateral', 'assets/gradeAssets/GM-PYTH-G7/triangle pink_1.1.png');
                this.load.image('pinkEqLine', 'assets/gradeAssets/GM-PYTH-G7/triangle pink_1.2.png');

                //* AnimShapes
                this.load.image('shap_4', 'assets/gradeAssets/GM-PYTH-G7/shap_4.png');
                this.load.image('shap_1', 'assets/gradeAssets/GM-PYTH-G7/shap_1.png');
                this.load.image('shap_2', 'assets/gradeAssets/GM-PYTH-G7/shap_2.png');
                this.load.image('shap_3', 'assets/gradeAssets/GM-PYTH-G7/shap_3.png');
                this.load.image('shap_5', 'assets/gradeAssets/GM-PYTH-G7/shap_5.png');

                //cross blue big
                this.load.image('corss_bigLine', 'assets/gradeAssets/GM-PYTH-G7/cross blue big.png');
                this.load.image('corss_smallLine', 'assets/gradeAssets/GM-PYTH-G7/cross smal big.png');

                this.load.atlas('formlaButton', 'assets/gradeAssets/GM-PYTH-G7/text box_3.png', null, GMPYTH_G7_JSON.textBox3);


        },

        create: function () {

                this.state.start('GMPYTH_G7level1');
        },
}