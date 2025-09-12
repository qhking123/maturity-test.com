// Basic mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Question data
    const questions = [
        {
            id: 1,
            text: 'Do you feel like you have a good handle on your emotions most days?',
            options: [
                { value: 4, text: 'Absolutely! I feel really in control of my emotions.' },
                { value: 3, text: 'Mostly, but I slip up occasionally.' },
                { value: 2, text: 'Kind of? I lose control sometimes, though.' },
                { value: 1, text: 'Not really. I don’t feel like I’m in control of my emotions.' }
            ]
        },
        {
            id: 2,
            text: 'Your teacher just gave you constructive feedback on a project. How do you react?',
            options: [
                { value: 4, text: 'I thank them and make a mental note for later.' },
                { value: 3, text: 'I smile and nod, but I’m a tiny bit annoyed on the inside.' },
                { value: 2, text: 'I explain how I disagree, but I don’t really push the matter.' },
                { value: 1, text: 'I launch into an argument with them. They’re totally in the wrong!' }
            ]
        },
        {
            id: 3,
            text: 'You and your friend get into a pretty nasty argument. How do you patch things up?',
            options: [
                { value: 4, text: 'I acknowledge the role I played in our argument and take accountability for my actions.' },
                { value: 3, text: 'I offer the most genuine apology I can muster, even if I don’t fully mean it.' },
                { value: 2, text: 'I apologize, but make it clear that they’re the one in the wrong.' },
                { value: 1, text: 'I don’t do anything—it’s up to them to fix things.' }
            ]
        },
        {
            id: 4,
            text: 'How often do you ask “How are you doing?” to your friends and loved ones?',
            options: [
                { value: 4, text: 'At least once per conversation.' },
                { value: 3, text: 'Once every few days.' },
                { value: 2, text: 'Once a week or so.' },
                { value: 1, text: 'I don’t typically remember to check-in.' }
            ]
        },
        {
            id: 5,
            text: 'You just received a bad grade and are feeling super frustrated. How do you react?',
            options: [
                { value: 4, text: 'I give myself time to unpack my feelings later on in a private space.' },
                { value: 3, text: 'I feel tense about it at first, but push it to the back of my mind until later.' },
                { value: 2, text: 'I don’t talk about it, but I’m a little bit snippy for the rest of the day.' },
                { value: 1, text: 'It really affects my mood—all my peers can tell that I’m upset.' }
            ]
        },
        {
            id: 6,
            text: 'Do you feel comfortable expressing your feelings in a respectful way?',
            options: [
                { value: 4, text: 'Yes, definitely. I can share my feelings without blaming other people.' },
                { value: 3, text: 'Usually, yeah—I don’t have too much trouble keeping my cool.' },
                { value: 2, text: 'Occasionally, but it doesn’t take long for me to play the blame game.' },
                { value: 1, text: 'Nah. I tend to blame other people for how I’m feeling.' }
            ]
        },
        {
            id: 7,
            text: 'The new gadget you want costs $200, but you only have $100 saved up. What’s your next move?',
            options: [
                { value: 4, text: 'I patiently save a little money over the next few months.' },
                { value: 3, text: 'I ask my neighbors if I can do some chores for a little cash.' },
                { value: 2, text: 'I ask my friend to loan me the rest of the money.' },
                { value: 1, text: 'I guilt-trip my parents until they give me what I want.' }
            ]
        },
        {
            id: 8,
            text: 'In a given conversation, how much time do you spend talking about yourself?',
            options: [
                { value: 4, text: 'About 50%—it’s an even split between myself and the other person.' },
                { value: 3, text: 'Between 50 and 60%. I talk a little more than the other person.' },
                { value: 2, text: 'Around 60-80%. I definitely dominate the conversation.' },
                { value: 1, text: 'Over 80%. The other person might get a few sentences in.' }
            ]
        },
        {
            id: 9,
            text: 'How often do you set aside time for self-reflection?',
            options: [
                { value: 4, text: 'At least once a day.' },
                { value: 3, text: 'Once every few days, I’d say.' },
                { value: 2, text: 'Once a week, typically.' },
                { value: 1, text: 'No idea—it’s not really a priority for me.' }
            ]
        },
        {
            id: 10,
            text: 'A friend just disagreed with something you said. How do you react?',
            options: [
                { value: 4, text: 'I ask them about their opinion. I’m so intrigued to hear their thoughts!' },
                { value: 3, text: 'I laugh it off, though I feel slightly irked.' },
                { value: 2, text: 'I say nothing, but stew about it long after the conversation ends.' },
                { value: 1, text: 'I poke fun at their opinion. That’s what they get for disagreeing with me!' }
            ]
        },
        {
            id: 11,
            text: 'Do you like to gossip with your friends?',
            options: [
                { value: 4, text: 'Nope. I’d be hurt if I knew someone was talking about me behind my back.' },
                { value: 3, text: 'A little bit. It’s definitely a guilty pleasure…' },
                { value: 2, text: 'I like to gossip, but I don’t usually initiate it.' },
                { value: 1, text: 'Absolutely! I love to hear the latest tea.' }
            ]
        },
        {
            id: 12,
            text: 'Your peer wins an award that you were hoping to get. What do you do?',
            options: [
                { value: 4, text: 'I smile and congratulate them. They earned it!' },
                { value: 3, text: 'I give them a shout-out, but I don’t really mean it.' },
                { value: 2, text: 'I roll my eyes. They probably became a teacher’s pet in order to win.' },
                { value: 1, text: 'I complain to my friends about how I deserved to win.' }
            ]
        }
    ];
    
    // Generate test form
    function generateTestForm() {
        const testSection = document.querySelector('.test-section .container');
        if (!testSection) return;
        
        const form = document.createElement('form');
        form.id = 'maturity-test';
        form.classList.add('test-form');
        
        // 添加表单标题
        const formTitle = document.createElement('h3');
        formTitle.textContent = 'Please answer the following questions to assess your maturity';
        formTitle.classList.add('highlight-text');
        form.appendChild(formTitle);
        
        // Add some empty lines for better readability
        form.appendChild(document.createElement('br'));
        form.appendChild(document.createElement('br'));

        // Add questions
        questions.forEach(question => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            
            const questionText = document.createElement('p');
            questionText.textContent = `${question.id}. ${question.text}`;
            questionDiv.appendChild(questionText);
            
            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('options');
            
            question.options.forEach(option => {
                const optionDiv = document.createElement('div');
                optionDiv.classList.add('option');

                const label = document.createElement('label');
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `question-${question.id}`;
                radio.value = option.value;
                
                label.appendChild(radio);
                label.appendChild(document.createTextNode(` ${option.text}`));
                
                optionDiv.appendChild(label);
                optionsDiv.appendChild(optionDiv);
            });
            
            questionDiv.appendChild(optionsDiv);
            form.appendChild(questionDiv);
        });
        
        // Add submit button
        const submitContainer = document.createElement('div');
        submitContainer.classList.add('submit-container');
        
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit Test';
        submitButton.classList.add('submit-btn');
        
        submitContainer.appendChild(submitButton);
        form.appendChild(submitContainer);
        
        // Clear test area and add form
        testSection.innerHTML = '';
        testSection.appendChild(form);
        
        // 添加表单提交事件
        form.addEventListener('submit', handleTestSubmit);
    }
    
    // Initialize test form
    generateTestForm();
    
    // Handle test submission
    function handleTestSubmit(event) {
        event.preventDefault();
        
        // Collect answers
        const answers = [];
        let totalScore = 0;
        let answeredQuestions = 0;
        
        questions.forEach(question => {
            const selectedOption = document.querySelector(`input[name="question-${question.id}"]:checked`);
            
            if (selectedOption) {
                const score = parseInt(selectedOption.value);
                answers.push({
                    questionId: question.id,
                    score: score
                });
                totalScore += score;
                answeredQuestions++;
            }
        });
        
        // Check if all questions have been answered
        if (answeredQuestions < questions.length) {
            alert('Please answer all questions before submitting!');
            return;
        }
        
        // Calculate maturity level
        const averageScore = totalScore / questions.length;
        let maturityLevel = '';
        let maturityDescription = '';
        
        if (averageScore < 2) {
            maturityLevel = 'Beginner Maturity';
            maturityDescription = 'Your emotional responses tend to be direct, and you may need more self-reflection and emotional management skills. Through conscious practice, you can improve your maturity level.';
        } else if (averageScore < 3) {
            maturityLevel = 'Intermediate Maturity';
            maturityDescription = 'You show good maturity in some situations, but there may still be room for improvement under pressure. Continue to cultivate self-awareness and emotional regulation skills.';
        } else if (averageScore < 3.5) {
            maturityLevel = 'Advanced Maturity';
            maturityDescription = 'You demonstrate a high level of emotional maturity, capable of remaining calm and rational in most situations. Continue to refine your interpersonal communication and empathy skills.';
        } else {
            maturityLevel = 'Exceptional Maturity';
            maturityDescription = 'You exhibit exceptional emotional maturity, capable of flexibly handling various situations and demonstrating profound understanding and wisdom in relationships.';
        }
        
        // Display results
        showResults(maturityLevel, maturityDescription, averageScore);
    }
    
    // Display test results
    function showResults(level, description, score) {
        // Hide test area, show results area
        const testSection = document.querySelector('.test-section');
        const resultsSection = document.querySelector('.results-section');
        
        if (testSection && resultsSection) {
            testSection.style.display = 'none';
            resultsSection.style.display = 'block';
            
            // 填充结果内容
            const resultsContainer = resultsSection.querySelector('.container');
            if (resultsContainer) {
                resultsContainer.innerHTML = `
                    <h2>Your Maturity Test Results</h2>
                    <div class="result-card">
                        <div class="result-level">${level}</div>
                        <div class="result-score">Score: ${(score / 4 * 100).toFixed(1)} / 100</div>
                        <div class="result-description">${description}</div>
                    </div>                    
                    <div class="comparison">
                        <p>Your maturity level exceeds approximately ${Math.round((score/4) * 100)}% of test takers.</p>
                    </div>
                    <br><br>
                    <div class="all-quiz-results">
                        <h3>All Quiz Results</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Maturity Level</th>
                                    <th>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>You’re really mature.</td>
                                    <td>73%</td>
                                </tr>
                                <tr>
                                    <td>You’re pretty mature.</td>
                                    <td>17%</td>
                                </tr>
                                <tr>
                                    <td>You’re on the path to becoming mature.</td>
                                    <td>6%</td>
                                </tr>
                                <tr>
                                    <td>You’ve got some mature habits! But there’s still room to grow…</td>
                                    <td>5%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br>
                    <div class="action-buttons">
                        <button class="retake-test">Retake Test</button>
                        <a href="#about" class="learn-more">Learn more about maturity</a>
                    </div>
                `;
                
                // Add retake test button event
                const retakeButton = resultsContainer.querySelector('.retake-test');
                if (retakeButton) {
                    retakeButton.addEventListener('click', function() {
                        // 重置测试
                        testSection.style.display = 'block';
                        resultsSection.style.display = 'none';
                        generateTestForm();
                    });
                }
            }
        }
    }
    
    // Initially hide results area
    const resultsSection = document.querySelector('.results-section');
    if (resultsSection) {
        resultsSection.style.display = 'none';
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // 减去导航栏高度
                    behavior: 'smooth'
                });
                
                // 如果导航菜单是打开的，关闭它
                const nav = document.querySelector('nav');
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });

    // FAQ section interactivity
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            this.parentNode.classList.toggle('active');
        });
    });
});
