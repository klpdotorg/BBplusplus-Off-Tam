Game.preloader_AL_TAR_G7 = function (game) {
        this.preloadBar = null;
};

var chime, clockTick;
Game.preloader_AL_TAR_G7.prototype = {
        preload: function () {

                // this.load.video('ML1_1', 'demoVideos/ML1-G7_1.mp4');   //* include demo video of ML-2 game.
                // this.load.video('ML1_2', 'demoVideos/ML1-G7_2.mp4');   //* include demo video of ML-2 game.

                this.load.atlas('bulb', 'assets/commonAssets/bulb.png', null, AL_TAR_G7_JSON.bulbBtnJson);
                this.load.image('skipArrow', 'assets/commonAssets/skipArrow.png');


                this.load.atlas('backbtn', 'assets/commonAssets/backbtn.png', null, AL_TAR_G7_JSON.backbtnJson);
                this.load.atlas('CommonSpeakerBtn', 'assets/commonAssets/speaker.png', null, AL_TAR_G7_JSON.speakerJson);
                this.load.atlas('starAnim', 'assets/commonAssets/starAnim.png', null, AL_TAR_G7_JSON.starAnimJson);
                this.load.atlas('replay', 'assets/commonAssets/reply.png', null, AL_TAR_G7_JSON.replyJson);
                this.load.image('navBar', 'assets/commonAssets/navBar.png');
                this.load.image('timebg', 'assets/commonAssets/timebg.png');
                this.load.image('hand', 'assets/commonAssets/hand.png');
                this.load.atlas('CommonHomeBtn', 'assets/commonAssets/homeBtn.png', null, AL_TAR_G7_JSON.homebtnJson);
                this.load.atlas('CommonNextBtn', 'assets/commonAssets/nextBtn.png', null, AL_TAR_G7_JSON.nextbtnJson);
                this.load.image('bg', 'assets/gradeAssets/AL-TAR-G7/Bg.png');

                this.load.atlas('upTriangle', 'assets/gradeAssets/AL-TAR-G7/angle_1.png', null, AL_TAR_G7_JSON.angle1);
                this.load.atlas('downTriangle', 'assets/gradeAssets/AL-TAR-G7/angle_3.png', null, AL_TAR_G7_JSON.angle3);
                this.load.atlas('squareAngle', 'assets/gradeAssets/AL-TAR-G7/angle_2.png', null, AL_TAR_G7_JSON.angle2);
                this.load.atlas('upTriangle2', 'assets/gradeAssets/AL-TAR-G7/angle_4.png', null, AL_TAR_G7_JSON.angle4);


                this.load.atlas('reverse1', 'assets/gradeAssets/AL-TAR-G7/Btn _1.png', null, AL_TAR_G7_JSON.reverse1);
                this.load.atlas('reverse2', 'assets/gradeAssets/AL-TAR-G7/AL_GAME_G7.png', null, AL_TAR_G7_JSON.reverse2);

                this.load.image('panel_1', 'assets/gradeAssets/AL-TAR-G7/panle_1.png');
                this.load.image('panel_2', 'assets/gradeAssets/AL-TAR-G7/panle_2.png');
                this.load.image('panel_3', 'assets/gradeAssets/AL-TAR-G7/panle_3.png');

                this.load.image('box_1', 'assets/gradeAssets/AL-TAR-G7/box_1.png');
                this.load.image('box_2', 'assets/gradeAssets/AL-TAR-G7/box_2.png');
                this.load.image('box_3', 'assets/gradeAssets/AL-TAR-G7/box_3.png');

                this.load.atlas('TickBtn', 'assets/gradeAssets/AL-TAR-G7/TickBtn.png', null, AL_TAR_G7_JSON.tickJson);
        

        },

        create: function () {
                this.state.start('AL_TAR_G7level1');
        },
}