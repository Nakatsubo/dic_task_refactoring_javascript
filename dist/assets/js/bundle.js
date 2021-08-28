/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (function() {

eval("window.addEventListener('DOMContentLoaded', function () {\n  // 要素を取得する\n  var getSubjectScore = function getSubjectScore() {\n    var national_language = Number(document.getElementById('js-national-language').value);\n    var english = Number(document.getElementById('js-english').value);\n    var mathematics = Number(document.getElementById('js-mathematics').value);\n    var science = Number(document.getElementById('js-science').value);\n    var society = Number(document.getElementById('js-society').value);\n    var subject_points = [national_language, english, mathematics, science, society];\n    return subject_points;\n  }; // 値を取得する\n\n\n  var scoreInputs = document.getElementsByTagName('input');\n\n  for (var i = 0; i < scoreInputs.length; i++) {\n    scoreInputs[i].dataset.number = i;\n    scoreInputs[i].addEventListener('change', scoreIndicate, false);\n  }\n\n  function scoreIndicate() {\n    // 各要素の値を返す\n    var subjectScores = getSubjectScore(); // 合計点を返す\n\n    var SUM_INDICATE = document.getElementById('js-sum-indicate');\n    var subjectScoreSum = subjectScores.reduce(function (a, b) {\n      return a + b;\n    });\n    SUM_INDICATE.textContent = subjectScoreSum; // 平均点を返す\n\n    var AVERAGE_INDICATE = document.getElementById('js-average-indicate');\n    var subjectScoreAverage = subjectScoreSum / subjectScores.length;\n    AVERAGE_INDICATE.textContent = subjectScoreAverage; // ランクを判定する\n\n    var getAchivement = function getAchivement(average) {\n      var JS_BTN_EVALUATION = document.getElementById('js-btn-evaluation');\n      var JS_EVALUATION = document.getElementById('js-evaluation');\n      var achievement = '';\n\n      if (average >= 100 * 0.8) {\n        achievement = 'A';\n      } else if (average >= 100 * 0.6) {\n        achievement = 'B';\n      } else if (average >= 100 * 0.4) {\n        achievement = 'C';\n      } else {\n        achievement = 'D';\n      }\n\n      JS_BTN_EVALUATION.addEventListener('click', function () {\n        JS_EVALUATION.textContent = achievement;\n      }, false);\n      return achievement;\n    };\n\n    var getAchivementResult = getAchivement(subjectScoreAverage); // 判定を判定する\n\n    var getPassOrFailure = function getPassOrFailure(score) {\n      var JS_BTN_JUDGE = document.getElementById('js-btn-judge');\n      var JS_JUDGE = document.getElementById('js-judge');\n      var passOrFailure = '合格';\n\n      for (var _i = 0; _i < score.length; _i++) {\n        if (score[_i] < 60) {\n          passOrFailure = '不合格';\n          break;\n        }\n      }\n\n      JS_BTN_JUDGE.addEventListener('click', function () {\n        JS_JUDGE.textContent = passOrFailure;\n      }, false);\n      return passOrFailure;\n    };\n\n    var getPassOrFailureResult = getPassOrFailure(subjectScores); // 最終ジャッジを判定する\n\n    var getJudgement = function getJudgement(achievement, passOrFailure) {\n      var btnDeclaration = document.getElementById('js-btn-declaration');\n      var declaration = document.getElementById('js-declaration');\n      var judgement = \"\\u3042\\u306A\\u305F\\u306E\\u6210\\u7E3E\\u306F\".concat(achievement, \"\\u3067\\u3059\\u3002\").concat(passOrFailure, \"\\u3067\\u3059\");\n      btnDeclaration.addEventListener('click', function () {\n        declaration.textContent = judgement;\n        declaration.style.display = 'inline-flex';\n      }, false);\n    };\n\n    getJudgement(getAchivementResult, getPassOrFailureResult);\n  }\n}, false);\n\n//# sourceURL=webpack://dic_task_refactoring/./src/assets/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/main.js"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=maps/bundle.js.map
