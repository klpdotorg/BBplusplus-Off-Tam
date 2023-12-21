Game.grade8NumberSystems = function (game) {

};

Game.grade8NumberSystems.prototype = {

	init: function (game_id, userHasPlayed, timeInMinutes, timeInSeconds, score, gradeTopics, grade, microConcepts) {
		_this = this;
		//console.log("sync telemetry"+navigator.connection.type);
		if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
			console.log("sync telemetry" + navigator.connection.type);
			//absdsjsapi.syncTelemetryData();
		}

		document.addEventListener("online", _this.syncTelFunc, false);

		//Variables used for user progress
		_this.userHasPlayed = userHasPlayed;
		_this.timeInMinutes = timeInMinutes;
		_this.timeInSeconds = timeInSeconds;
		_this.score = score;
		_this.game_id = game_id;
		_this.gradeTopics = gradeTopics;
		_this.grade = grade;
		_this.microConcepts = microConcepts;
	},

	syncTelFunc: function () {
		if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
			console.log("sync telemetry" + navigator.connection.type);
			//absdsjsapi.syncTelemetryData();
		}
	},

	create: function (game) {

		nativeApp.screenViewStringPass("Practice_activity_list", "grade8NumberSystems");

		_this = this;

		this.game.input.enabled = false;

		grade8NumberSystemsSelected = false;
		// grade6AlgebraSelected = false;
		// grade6RatioandProportionSelected = false;
		// grade6GeometrySelected = false;
		// grade6DecimalsSelected = false;

		this.video = null;
		this.video1 = null;
		this.video2 = null;
		this.video3 = null;

		_this.tween = null;
		_this.tap = false;
		//adding bg, title to the scene.
		_this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'gameselectBg');

		_this.gradeBackBtn = _this.add.sprite(-5, 3, 'gradeSceneBackBtn');
		_this.gradeBackBtn.inputEnabled = true;
		_this.gradeBackBtn.input.useHandCursor = true;
		_this.gradeBackBtn.input.priorityID = 1;
		_this.gradeBackBtn.events.onInputDown.add(function (target) {
			target.events.onInputDown.removeAll();
			//_this.cache.destroy();
			_this.clickSound = _this.add.audio('ClickSound');
			_this.clickSound.play();
			grade8NumberSystemsSelected = false;
			_this.state.start('selectgrade8MicroConceptScreen', true, false);
		}, _this);

		this.gameModeShareBtn = game.add.image(920, 18, 'shareIcon');
		this.gameModeShareBtn.anchor.setTo(0.5);
		this.gameModeShareBtn.scale.setTo(0.75);
		// this.gameModeShareBtn.inputEnabled = true;
		// this.gameModeShareBtn.input.priorityID = 1;
		// this.gameModeShareBtn.input.useHandCursor = true;
		// this.gameModeShareBtn.events.onInputDown.add(function () {
		// 	this.clickSound = this.add.audio('ClickSound');
		// 	this.clickSound.play();
		// 	nativeApp.ShareApp();
		// }, this);


		_this.grade8NumbersGroup = _this.add.group();
		// _this.grade6IntegersGroup = _this.add.group();
		// _this.grade6FractionsGroup = _this.add.group();
		// _this.grade6DecimalsGroup = _this.add.group();
		// _this.grade6RatioandProportionGroup = _this.add.group();

		_this.addgrade8NumbersTopic();
		// _this.addgrade6IntegersTopic();
		// _this.addgrade6FractionsTopic();
		// _this.addgrade6DecimalsTopic();
		// _this.addgrade6RatioProportionTopic();

		_this.grade8NumbersGroup.x = 0;
		_this.grade8NumbersGroup.y = 0;

		// _this.grade6IntegersGroup.x = 0;
		// _this.grade6IntegersGroup.y = 500;

		// _this.grade6FractionsGroup.x = 0;
		// _this.grade6FractionsGroup.y = 1410;

		// _this.grade6DecimalsGroup.x = 0;
		// _this.grade6DecimalsGroup.y = 2320;

		// _this.grade6RatioandProportionGroup.x = 0;
		// _this.grade6RatioandProportionGroup.y = 3230;

		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xD957A0, 0);
		_this.graphicsBg.drawRect(0, 0, 960, 4000);
		_this.graphicsBg.boundsPadding = 0;

		_this.mask = _this.add.graphics();
		_this.mask.position.x = 0;
		_this.mask.position.y = 35;
		_this.mask.beginFill(0, 1);
		_this.mask.moveTo(0, 0);
		_this.mask.lineTo(960, 0);
		_this.mask.lineTo(960, 505);
		_this.mask.lineTo(0, 505);
		_this.mask.lineTo(0, 0);
		_this.mask.endFill();
		_this.graphicsBg.mask = _this.mask;

		// _this.graphicsBg.addChild(_this.grade6RatioandProportionGroup);
		// _this.graphicsBg.addChild(_this.grade6DecimalsGroup);
		// _this.graphicsBg.addChild(_this.grade6FractionsGroup);
		_this.graphicsBg.addChild(_this.grade8NumbersGroup);
		//_this.graphicsBg.addChild(_this.grade6IntegersGroup);


		_this.swipeUpFlag = true;
		_this.swipeDownFlag = false;
		_this.page = document.getElementById("body");
		_this.mc = new Hammer(_this.page);
		_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL, enable: false });

		_this.mc.on("swipeleft", function () {
			//console.log('swipeleft');
		});

		_this.mc.on("swiperight", function () {
			//console.log('swiperight');
		});

		_this.mc.on("swipeup", function (v) {
			//console.log(v);


			//	if(swipeUpFlag)
			//	{
			//game.input.enabled = false;

			_this.tween = game.add.tween(_this.graphicsBg);
			_this.tween.to({ y: _this.graphicsBg.y - (v.distance * (v.overallVelocity * 2 / -1)) }, 0, 'Linear', true, 0);
			_this.tween.onComplete.add(function () {
				//	swipeDownFlag = true;
				_this.tween = null;
				if (_this.graphicsBg.y <= -2000) {
					//swipeUpFlag = false;
					_this.graphicsBg.y = -2000;
				}

				//game.input.enabled = true;
			}, _this);
			_this.tween.onUpdateCallback(function () {
				_this.tap = false;
				if (_this.graphicsBg.y <= -2000) {
					//swipeUpFlag = false;
					_this.graphicsBg.y = -2000;
					_this.tween.stop();
					//_this.tween = null;
					//game.input.enabled = true;
				}
			}, _this);

			//	}
		});

		_this.mc.on("swipedown", function (v) {

			//	if(swipeDownFlag)
			//	{
			//game.input.enabled = false;
			_this.tween = game.add.tween(_this.graphicsBg);
			_this.tween.to({ y: _this.graphicsBg.y + (v.distance * (v.overallVelocity * 2)) }, 0, 'Linear', true, 0);
			_this.tween.onComplete.add(function () {
				//	swipeUpFlag = true;
				_this.tween = null;
				if (_this.graphicsBg.y >= 0) {
					//	swipeDownFlag = false;
					_this.graphicsBg.y = 0;
				}
				//game.input.enabled = true;
			}, _this);

			_this.tween.onUpdateCallback(function () {
				tap = false;
				if (_this.graphicsBg.y >= 0) {
					//swipeUpFlag = false;
					_this.graphicsBg.y = 0;
					_this.tween.stop();
					//_this.tween = null;
					//game.input.enabled = true;
				}
			}, _this);
			//	}
		});

		_this.input.onDown.add(function () {
			if (_this.tween) {
				if (_this.tween.isRunning) {
					_this.tween.stop();
					//_this.tween = null;
				}
			}
			_this.graphicsBg.inputEnabled = true;
			_this.graphicsBg.input.enableDrag();
			_this.graphicsBg.input.allowHorizontalDrag = false;

			_this.graphicsBg.events.onDragUpdate.add(function () {
				_this.tap = false;
				if (_this.tween) {
					if (_this.tween.isRunning) {
						_this.tween.stop();
						//_this.tween = null;
					}
				}
				if (_this.graphicsBg.y >= 10) {
					//swipeUpFlag = false;
					_this.graphicsBg.y = 0;
					//tween.stop();
					//game.input.enabled = true;
				}
				else if (_this.graphicsBg.y <= -2000) {
					//swipeUpFlag = false;
					_this.graphicsBg.y = -2000;
					//tween.stop();
					//game.input.enabled = true;
				}
			}, _this);

			_this.graphicsBg.events.onDragStop.add(function (e) {
				_this.tap = false;
				//console.log(e);
				if (_this.tween) {
					//if(tween.isRunning)
					_this.tween.stop();
					//_this.tween = null;
				}

				if (_this.graphicsBg.y >= 0) {
					//	swipeDownFlag = false;
					_this.graphicsBg.y = 0;
				}
				else if (_this.graphicsBg.y <= -2000) {
					//swipeUpFlag = false;
					_this.graphicsBg.y = -2000;
				}

			}, _this);

		}, _this);

		_this.input.onTap.add(function () {
			//console.log("tap");
			_this.tap = true;
			_this.time.events.add(3000, function () {
				_this.time.events.removeAll();
				_this.tap = false;
				//console.log("tapfalse");
			}, _this);
		}, _this);

		if (gradeScreen) {
			_this.graphicsBg.y = -2000;

			var gameScreenTween = game.add.tween(_this.graphicsBg);
			gameScreenTween.to({ y: 0 }, 2000, 'Linear', true, 0);
			gameScreenTween.onComplete.add(function () {
				this.game.input.enabled = true;

				if (_this.mc) {
					_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL, enable: true });
				}

			}, _this);

			gradeScreen = false;
		}
		else {
			if (_this.mc) {
				_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL, enable: true });
			}
			this.game.input.enabled = true;
		}
	},

	addgrade8NumbersTopic: function () {
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xD957A0, 1);
		_this.topicTxtBg.drawRoundedRect(0, 0, 170, 100, 10);
		_this.topicTxtBg.boundsPadding = 0;

		_this.topicTitleText = this.add.text(185, 85, ' \n ' + window.selctedLang.numbersTitle + ' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';
		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;

		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xD957A0, 1);
		_this.topicBg.drawRoundedRect(0, 0, 805, 200, 30); 
		_this.topicBg.boundsPadding = 0;

		_this. NS_RN_Screen = _this.add.sprite(100, 120, 'NS_RN_Screen');
		_this.bgGraphicNum1 = this.add.graphics(210, 175);
		_this.bgGraphicNum1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicNum1.beginFill(0x493A19, 1);
		_this.bgGraphicNum1.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicNum1.boundsPadding = 0;
		_this.NS_RN_ScreenTxt = this.add.text(225, 192, ' \n ' + window.selctedLang.NS_RN_Screen + ' \n ');
		_this.NS_RN_ScreenTxt.anchor.setTo(0.5);
		_this.NS_RN_ScreenTxt.align = 'center';
		_this.NS_RN_ScreenTxt.font = 'gradefont';
		_this.NS_RN_ScreenTxt.fontSize = 20;
		_this.NS_RN_ScreenTxt.fontWeight = 'normal';
		_this.NS_RN_ScreenTxt.fill = 'white';
		_this.NS_RN_ScreenTxt.wordWrap = true;
		_this.NS_RN_ScreenTxt.wordWrapWidth = 500;
		_this.NS_RN_Screen.inputEnabled = true;
		_this.NS_RN_Screen.name = "Numbers OE-1";
		_this.NS_RN_Screen.input.useHandCursor = true;
		_this.NS_RN_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NS_RN_G8', true, false);
				}
			}, _this);
		}, _this);

		_this.NS_DIN_Screen = _this.add.sprite(300, 120, 'NS_DIN_Screen');
		_this.bgGraphicNum3 = this.add.graphics(410, 175);
		_this.bgGraphicNum3.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicNum3.beginFill(0x493A19, 1);
		_this.bgGraphicNum3.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicNum3.boundsPadding = 0;
		_this.NS_DIN_ScreenTxt = this.add.text(425, 192, ' \n ' + window.selctedLang.NS_SQ_CUB_Screen + ' \n ');
		_this.NS_DIN_ScreenTxt.anchor.setTo(0.5);
		_this.NS_DIN_ScreenTxt.align = 'center';
		_this.NS_DIN_ScreenTxt.font = 'gradefont';
		_this.NS_DIN_ScreenTxt.fontSize = 20;
		_this.NS_DIN_ScreenTxt.fontWeight = 'normal';
		_this.NS_DIN_ScreenTxt.fill = 'white';
		_this.NS_DIN_ScreenTxt.wordWrap = true;
		_this.NS_DIN_ScreenTxt.wordWrapWidth = 500;
		_this.NS_DIN_Screen.inputEnabled = true;
		_this.NS_DIN_Screen.name = "NS_DIN";
		_this.NS_DIN_Screen.input.useHandCursor = true;
		_this.NS_DIN_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NS_DIN_G8', true, false);
				}
			}, _this);
		}, _this);
		

		_this.NS_SQ_CUB_Screen = _this.add.sprite(500, 120, 'NS_SQ_CUB_Screen');
		_this.bgGraphicNum2 = this.add.graphics(610, 175);
		_this.bgGraphicNum2.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphicNum2.beginFill(0x493A19, 1);
		_this.bgGraphicNum2.drawRoundedRect(0, 0, 30, 30, 10);
		_this.bgGraphicNum2.boundsPadding = 0;
		_this.NS_SQ_CUB_ScreenTxt = this.add.text(625, 192, ' \n ' + window.selctedLang.NS_DIN_Screen + ' \n ');//NS_DIN_Screen
		_this.NS_SQ_CUB_ScreenTxt.anchor.setTo(0.5);
		_this.NS_SQ_CUB_ScreenTxt.align = 'center';
		_this.NS_SQ_CUB_ScreenTxt.font = 'gradefont';
		_this.NS_SQ_CUB_ScreenTxt.fontSize = 20;
		_this.NS_SQ_CUB_ScreenTxt.fontWeight = 'normal';
		_this.NS_SQ_CUB_ScreenTxt.fill = 'white';
		_this.NS_SQ_CUB_ScreenTxt.wordWrap = true;
		_this.NS_SQ_CUB_ScreenTxt.wordWrapWidth = 500;
		_this.NS_SQ_CUB_Screen.inputEnabled = true;
		_this.NS_SQ_CUB_Screen.input.useHandCursor = true;
		_this.NS_SQ_CUB_Screen.name = "NS_SQ_CUB";
		_this.NS_SQ_CUB_Screen.events.onInputDown.add(function (target) {
			_this.time.events.add(300, function () {
				if (_this.tap) {
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('preloader_NS_SQ_CUB_G8', true, false);
				}
			}, _this);
		}, _this);

		// _this.NS_DIN_Screen = _this.add.sprite(500, 120, 'NS_DIN_Screen');
		// _this.bgGraphicNum3 = this.add.graphics(610, 175);
		// _this.bgGraphicNum3.lineStyle(0, 0xFFFFFF, 0.8);
		// _this.bgGraphicNum3.beginFill(0x493A19, 1);
		// _this.bgGraphicNum3.drawRoundedRect(0, 0, 30, 30, 10);
		// _this.bgGraphicNum3.boundsPadding = 0;
		// _this.NS_DIN_ScreenTxt = this.add.text(625, 192, ' \n ' + window.selctedLang.NS_DIN_Screen + ' \n ');
		// _this.NS_DIN_ScreenTxt.anchor.setTo(0.5);
		// _this.NS_DIN_ScreenTxt.align = 'center';
		// _this.NS_DIN_ScreenTxt.font = 'gradefont';
		// _this.NS_DIN_ScreenTxt.fontSize = 20;
		// _this.NS_DIN_ScreenTxt.fontWeight = 'normal';
		// _this.NS_DIN_ScreenTxt.fill = 'white';
		// _this.NS_DIN_ScreenTxt.wordWrap = true;
		// _this.NS_DIN_ScreenTxt.wordWrapWidth = 500;
		// _this.NS_DIN_Screen.inputEnabled = true;
		// _this.NS_DIN_Screen.name = "Numbers HCF-1";
		// _this.NS_DIN_Screen.input.useHandCursor = true;
		// _this.NS_DIN_Screen.events.onInputDown.add(function (target) {
		// 	_this.time.events.add(300, function () {
		// 		if (_this.tap) {
		// 			_this.time.events.removeAll();
		// 			target.events.onInputDown.removeAll();
		// 			_this.clickSound = _this.add.audio('ClickSound');
		// 			_this.clickSound.play();
		// 			_this.state.start('preloader_NS_DIN_G8', true, false);
		// 		}
		// 	}, _this);
		// }, _this);

		_this.grade8NumbersGroup.add(_this.topicTxtBg);
		_this.grade8NumbersGroup.add(_this.topicTitleText);
		_this.grade8NumbersGroup.add(_this.topicBg);
		_this.grade8NumbersGroup.add(_this.NS_RN_Screen);
		_this.grade8NumbersGroup.add(_this.bgGraphicNum1);
		_this.grade8NumbersGroup.add(_this.NS_RN_ScreenTxt);
		_this.grade8NumbersGroup.add(_this.NS_SQ_CUB_Screen);
		_this.grade8NumbersGroup.add(_this.bgGraphicNum2);
		_this.grade8NumbersGroup.add(_this.NS_SQ_CUB_ScreenTxt);
		_this.grade8NumbersGroup.add(_this.NS_DIN_Screen);
		_this.grade8NumbersGroup.add(_this.bgGraphicNum3);
		_this.grade8NumbersGroup.add(_this.NS_DIN_ScreenTxt);
		// _this.grade8NumbersGroup.add(_this.PRM_1_Screen);
		// _this.grade8NumbersGroup.add(_this.bgGraphicNum4);
		// _this.grade8NumbersGroup.add(_this.PRM_1_ScreenTxt);
		// _this.grade8NumbersGroup.add(_this.FM_3_Screen);
		// _this.grade8NumbersGroup.add(_this.bgGraphicNum5);
		// _this.grade8NumbersGroup.add(_this.FM_3_ScreenTxt);
		// _this.grade8NumbersGroup.add(_this.FM_4_Screen);
		// _this.grade8NumbersGroup.add(_this.bgGraphicNum6);
		// _this.grade8NumbersGroup.add(_this.FM_4_ScreenTxt);
		// _this.grade8NumbersGroup.add(_this.LCM_1_Screen);
		// _this.grade8NumbersGroup.add(_this.bgGraphicNum7);
		// _this.grade8NumbersGroup.add(_this.LCM_1_ScreenTxt);
	},

	amplifyMedia: function (mediaElem, multiplier) {
		var context = new (window.AudioContext || window.webkitAudioContext),
			result = {
				context: context,
				source: context.createMediaElementSource(mediaElem),
				gain: context.createGain(),
				media: mediaElem,
				amplify: function (multiplier) { result.gain.gain.value = multiplier; },
				getAmpLevel: function () { return result.gain.gain.value; }
			};
		result.source.connect(result.gain);
		result.gain.connect(context.destination);
		result.amplify(multiplier);

		return result;
	},

	stopDemoVoice: function () {
		if (_this.playQuestionSound) {
			if (_this.playQuestionSound.contains(_this.src)) {
				_this.playQuestionSound.removeChild(_this.src);
				_this.src = null;
			}
			if (!_this.playQuestionSound.paused) {
				_this.playQuestionSound.pause();
				_this.playQuestionSound.currentTime = 0.0;
			}
			_this.playQuestionSound = null;
			_this.src = null;
		}
	},
	shutdown: function () {
		if (_this.mc) {
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL, enable: false });
		}
		document.removeEventListener("online", _this.syncTelFunc, false);

		if (this.video) {
			this.video.destroy();
			this.video.removeVideoElement();
			this.video = null;
		}

		if (this.video1) {
			this.video1.destroy();
			this.video1.removeVideoElement();
			this.video1 = null;
		}
		if (this.video2) {
			this.video2.destroy();
			this.video2.removeVideoElement();
			this.video2 = null;
		}
		if (this.video3) {
			this.video3.destroy();
			this.video3.removeVideoElement();
			this.video3 = null;
		}
	},

	convertTimeinMinandSectoHrsMinsSecs: function (Hours1, Minutes1, Seconds1) {
		console.log("inside convert time", Hours1, Minutes1, Seconds1);

		const totalMinutes = Math.floor((parseInt(Seconds1) + parseInt(_this.timeInSeconds)) / 60) + (parseInt(Minutes1) + parseInt(_this.timeInMinutes));
		const Seconds2 = (parseInt(Seconds1) + parseInt(_this.timeInSeconds)) % 60;

		const Hours2 = Math.floor(totalMinutes / 60) + parseInt(Hours1);
		const Minutes2 = totalMinutes % 60;

		console.log("before adding");
		console.log("totalMinutes", totalMinutes);
		console.log("after adding");
		console.log("Seconds2", Seconds2);
		console.log("Hours2", Hours2);
		console.log("Minutes2", Minutes2)

		var save_assessment = {
			game_id: _this.game_id,
			totalLearningTimeinHrs: Hours2.toString(),
			totalLearningTimeinMins: Minutes2.toString(),
			totalLearningTimeinSecs: Seconds2.toString(),
		}
		console.log("save assessment", save_assessment);
		if (_this.userHasPlayed == 1) {
			BBplusplusdbDetails.updateRecordsUsingGameID(save_assessment);
		}

	}
};