window.addEventListener('DOMContentLoaded', () => {

  // 要素を取得する
  const getSubjectScore = () => {
    let national_language = Number(document.getElementById('js-national-language').value)
    let english = Number(document.getElementById('js-english').value)
    let mathematics = Number(document.getElementById('js-mathematics').value)
    let science = Number(document.getElementById('js-science').value)
    let society = Number(document.getElementById('js-society').value)
    let subject_points = [
      national_language,
      english,
      mathematics,
      science,
      society
    ]
    return subject_points
  }

  // 値を取得する
  let scoreInputs = document.getElementsByTagName('input')
  for (let i = 0; i < scoreInputs.length; i++) {
    scoreInputs[i].dataset.number = i;
    scoreInputs[i].addEventListener('change', scoreIndicate, false);
  }
  function scoreIndicate() {
    // 各要素の値を返す
    let subjectScores = getSubjectScore()

    // 合計点を返す
    const SUM_INDICATE = document.getElementById('js-sum-indicate')
    let subjectScoreSum = subjectScores.reduce((a,b) => a + b)
    SUM_INDICATE.textContent = subjectScoreSum

    // 平均点を返す
    const AVERAGE_INDICATE = document.getElementById('js-average-indicate')
    let subjectScoreAverage = subjectScoreSum / subjectScores.length
    AVERAGE_INDICATE.textContent = subjectScoreAverage

    // ランクを判定する
    const getAchivement = (average) => {
      const JS_BTN_EVALUATION = document.getElementById('js-btn-evaluation')
      const JS_EVALUATION = document.getElementById('js-evaluation')
      let achievement = ''
      if (average >= 100 * 0.8) {
        achievement = 'A'
      } else if (average >= 100 * 0.6) {
        achievement = 'B'
      } else if (average >= 100 * 0.4) {
        achievement = 'C'
      } else {
        achievement = 'D'
      }

      JS_BTN_EVALUATION.addEventListener('click', () => {
        JS_EVALUATION.textContent = achievement
      }, false)

      return achievement
    }
    let getAchivementResult = getAchivement(subjectScoreAverage)

    // 判定を判定する
    const getPassOrFailure = (score) => {
      const JS_BTN_JUDGE = document.getElementById('js-btn-judge')
      const JS_JUDGE = document.getElementById('js-judge')
      let passOrFailure = '合格'
      for (let i = 0; i < score.length; i++) {
        if (score[i] < 60) {
          passOrFailure = '不合格'
          break
        }
      }

      JS_BTN_JUDGE.addEventListener('click', () => {
        JS_JUDGE.textContent = passOrFailure
      }, false)

      return passOrFailure
    }
    let getPassOrFailureResult = getPassOrFailure(subjectScores)

    // 最終ジャッジを判定する
    const getJudgement = (achievement, passOrFailure) => {
      const btnDeclaration = document.getElementById('js-btn-declaration')
      const declaration = document.getElementById('js-declaration')
      let judgement = `あなたの成績は${achievement}です。${passOrFailure}です`

      btnDeclaration.addEventListener('click', () => {
        declaration.textContent = judgement;
        declaration.style.display = 'inline-flex';
      }, false)
    }
    getJudgement(getAchivementResult, getPassOrFailureResult)
  }
}, false)
