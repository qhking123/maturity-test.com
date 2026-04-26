const SiteData = {
    siteName: 'Maturity Test',
    siteUrl: 'https://maturity-test.com',

    innerPages: [
        {
            url: 'mental-age-test',
            label: 'Mental Age Test',
            title: 'Mental Age Test: Discover Your True Inner Age',
            keyword: 'Mental Age Test',
            desc: 'Discover your true mental age with our fun and insightful assessment. Compare your psychological maturity to your chronological age.',
            icon: '&#129504;',
            type: 'test'
        },
        {
            url: 'emotional-maturity-test',
            label: 'Emotional Maturity Test',
            title: 'Emotional Maturity Test: How Mature Are You?',
            keyword: 'Emotional Maturity Test',
            desc: 'Assess your EQ, emotional regulation, and social intelligence with our professional emotional maturity assessment.',
            icon: '&#128161;',
            type: 'test'
        },
        {
            url: 'relationship-maturity-test',
            label: 'Relationship Maturity Quiz',
            title: 'Relationship Maturity Quiz: Are You Ready for Love?',
            keyword: 'Relationship Maturity',
            desc: 'Evaluate your maturity in romantic relationships. Are your arguments constructive or childish?',
            icon: '&#10084;&#65039;',
            type: 'test'
        },
        {
            url: 'what-is-maturity-test',
            label: 'What is a Maturity Test?',
            title: 'What is a Maturity Test? Definition & Dimensions',
            keyword: 'What is Maturity Test',
            desc: 'A comprehensive guide to understanding maturity tests, their scientific basis, types, and how they work.',
            icon: '&#128218;',
            type: 'info'
        },
        {
            url: 'maturity-quiz',
            label: 'Maturity Quiz',
            title: 'Maturity Quiz: A Fun Way to Check Your Maturity Level',
            keyword: 'Maturity Quiz',
            desc: 'A quick, entertaining 2-minute quiz to check your maturity level with fun, relatable questions.',
            icon: '&#127919;',
            type: 'quiz'
        }
    ],

    blogPosts: [
        { url: 'blog/comprehensive-guide-emotional-maturity', label: 'Emotional Maturity Guide', desc: 'Level up your emotional life with our ultimate growth guide.' },
        { url: 'blog/science-of-mental-age', label: 'The Science of Mental Age', desc: 'Why your brain age matters more than you think.' },
        { url: 'blog/maturity-in-relationships', label: 'Maturity in Relationships', desc: 'Building lasting connections through self-awareness.' },
        { url: 'blog/psychological-maturity-gap', label: 'Psychological Maturity Gap', desc: 'Why your emotional age might not match your biological years.' },
        { url: 'blog/developing-emotional-resilience', label: 'Emotional Resilience', desc: 'Build the core pillar of high maturity.' },
        { url: 'blog/workplace-maturity-success', label: 'Workplace Maturity', desc: 'How emotional intelligence drives career growth.' },
        { url: 'blog/emotional-hijack', label: 'Emotional Hijack', desc: '3 hidden causes of emotional loss of control.' },
        { url: 'blog/faking-maturity', label: 'Faking Maturity', desc: 'Are you truly mature or just acting the part?' },
        { url: 'blog/healthy-boundaries', label: 'Healthy Boundaries', desc: 'Setting boundaries is the ultimate sign of maturity.' },
        { url: 'blog/maturity-test-benefits', label: 'Benefits of Maturity Test', desc: 'How understanding your maturity transforms your life.' },
        { url: 'blog/how-maturity-test-works', label: 'How Maturity Test Works', desc: 'The science behind effective maturity assessments.' },
        { url: 'blog/maturity-test-faq', label: 'Maturity Test FAQ', desc: 'Answers to common questions about maturity tests.' }
    ],

    getOtherInnerPages(currentPageUrl) {
        return this.innerPages.filter(p => p.url !== currentPageUrl);
    },

    getRelatedBlogPosts(currentPageUrl, count) {
        count = count || 3;
        var relevanceMap = {
            'mental-age-test': ['blog/science-of-mental-age', 'blog/psychological-maturity-gap', 'blog/maturity-test-benefits'],
            'emotional-maturity-test': ['blog/emotional-hijack', 'blog/comprehensive-guide-emotional-maturity', 'blog/developing-emotional-resilience'],
            'relationship-maturity-test': ['blog/maturity-in-relationships', 'blog/healthy-boundaries', 'blog/faking-maturity'],
            'what-is-maturity-test': ['blog/how-maturity-test-works', 'blog/maturity-test-faq', 'blog/maturity-test-benefits'],
            'maturity-quiz': ['blog/faking-maturity', 'blog/psychological-maturity-gap', 'blog/comprehensive-guide-emotional-maturity']
        };
        var relevantUrls = relevanceMap[currentPageUrl] || [];
        var result = [];
        for (var i = 0; i < relevantUrls.length && result.length < count; i++) {
            for (var j = 0; j < this.blogPosts.length; j++) {
                if (this.blogPosts[j].url === relevantUrls[i]) {
                    result.push(this.blogPosts[j]);
                    break;
                }
            }
        }
        return result;
    }
};

function renderCrossLinks(currentPageUrl) {
    var otherPages = SiteData.getOtherInnerPages(currentPageUrl);
    var html = '<div class="cross-links-section"><h2>Explore More Maturity Assessments</h2><div class="cross-links-grid">';
    for (var i = 0; i < otherPages.length; i++) {
        var page = otherPages[i];
        html += '<a href="' + page.url + '" class="cross-link-card card">' +
            '<span class="cross-link-icon">' + page.icon + '</span>' +
            '<h3>' + page.label + '</h3>' +
            '<p>' + page.desc + '</p>' +
            '</a>';
    }
    html += '</div></div>';
    return html;
}

function renderRelatedPosts(currentPageUrl) {
    var posts = SiteData.getRelatedBlogPosts(currentPageUrl);
    var html = '<div class="related-posts"><h2>Related Reading</h2><div class="related-posts-grid">';
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        html += '<div class="related-card">' +
            '<h4><a href="' + post.url + '">' + post.label + '</a></h4>' +
            '<p>' + post.desc + '</p>' +
            '</div>';
    }
    html += '</div></div>';
    return html;
}

document.addEventListener('DOMContentLoaded', function() {
    var crossLinksContainer = document.getElementById('cross-links');
    if (crossLinksContainer) {
        crossLinksContainer.innerHTML = renderCrossLinks(crossLinksContainer.getAttribute('data-current-page'));
    }

    var relatedPostsContainer = document.getElementById('related-posts');
    if (relatedPostsContainer) {
        relatedPostsContainer.innerHTML = renderRelatedPosts(relatedPostsContainer.getAttribute('data-current-page'));
    }
});
