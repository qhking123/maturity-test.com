function QuizEngine(config) {
    this.containerId = config.containerId;
    this.resultsId = config.resultsId;
    this.questions = config.questions;
    this.calculateResult = config.calculateResult;
    this.renderResult = config.renderResult;
    this.submitText = config.submitText || 'See My Results';
    this.startBtnId = config.startBtnId || null;
    this.quizSectionId = config.quizSectionId || null;
    this.heroSectionId = config.heroSectionId || null;
}

QuizEngine.prototype.init = function() {
    var self = this;

    if (this.startBtnId) {
        var startBtn = document.getElementById(this.startBtnId);
        if (startBtn) {
            startBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (self.heroSectionId) {
                    var hero = document.getElementById(self.heroSectionId);
                    if (hero) hero.style.display = 'none';
                }
                if (self.quizSectionId) {
                    var quizSection = document.getElementById(self.quizSectionId);
                    if (quizSection) quizSection.style.display = 'block';
                }
                self.render();
                var target = document.getElementById(self.containerId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
    }

    this.render();
};

QuizEngine.prototype.render = function() {
    var container = document.getElementById(this.containerId);
    if (!container) return;

    var html = '<form class="quiz-form">';
    for (var i = 0; i < this.questions.length; i++) {
        var q = this.questions[i];
        html += '<div class="question">' +
            '<p>' + (i + 1) + '. ' + q.text + '</p>' +
            '<div class="options">';
        for (var j = 0; j < q.options.length; j++) {
            var opt = q.options[j];
            html += '<div class="option">' +
                '<label>' +
                '<input type="radio" name="q' + i + '" value="' + opt.value + '">' +
                ' ' + opt.text +
                '</label>' +
                '</div>';
        }
        html += '</div></div>';
    }
    html += '<div class="submit-container">' +
        '<button type="submit" class="btn submit-btn">' + this.submitText + '</button>' +
        '</div></form>';

    container.innerHTML = html;

    var form = container.querySelector('form');
    if (form) {
        var self = this;
        form.addEventListener('submit', function(e) { self.handleSubmit(e); });
    }
};

QuizEngine.prototype.handleSubmit = function(e) {
    e.preventDefault();
    var answers = [];
    var totalScore = 0;
    var answered = 0;
    var dimensionScores = {};

    for (var i = 0; i < this.questions.length; i++) {
        var selected = document.querySelector('input[name="q' + i + '"]:checked');
        if (selected) {
            var score = parseInt(selected.value);
            var q = this.questions[i];
            answers.push({ questionIndex: i, score: score, dimension: q.dimension || null });
            totalScore += score;
            answered++;
            if (q.dimension) {
                if (!dimensionScores[q.dimension]) {
                    dimensionScores[q.dimension] = { total: 0, count: 0 };
                }
                dimensionScores[q.dimension].total += score;
                dimensionScores[q.dimension].count++;
            }
        }
    }

    if (answered < this.questions.length) {
        alert('Please answer all questions before submitting!');
        return;
    }

    var result = this.calculateResult(answers, totalScore, dimensionScores);
    this.showResult(result);
};

QuizEngine.prototype.showResult = function(result) {
    var container = document.getElementById(this.resultsId);
    var quizContainer = document.getElementById(this.containerId);

    if (quizContainer) quizContainer.style.display = 'none';
    if (container) {
        container.style.display = 'block';
        container.innerHTML = this.renderResult(result);

        var retakeBtn = container.querySelector('.retake-test');
        if (retakeBtn) {
            var self = this;
            retakeBtn.addEventListener('click', function() {
                if (quizContainer) quizContainer.style.display = 'block';
                container.style.display = 'none';
                self.render();
                quizContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }

        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
