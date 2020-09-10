'use strict';

// Initialize constants Template and HashMap
const Template = require('dw/util/Template')
const HashMap = require('dw/util/HashMap')

/**
 * @function renderFAQItem
 * @description 
 *
 * @param {Object} componentContent 
 * @returns {String} 
 */
function renderFAQItem(componentContent) {

    // Initialize the model
    let model = new HashMap();

    model.text_faq_title = componentContent.content.text_faq_title;
    model.text_faq_question = componentContent.content.text_faq_question;
    model.text_faq_answer = componentContent.content.text_faq_answer;

    model.disable_faq_title = componentContent.content.disable_faq_title;
    model.disable_faq_item = componentContent.content.disable_faq_item;

    return new Template('experience/components/commerce_assets/faqitem').render(model).text;

}

module.exports.render = renderFAQItem;
