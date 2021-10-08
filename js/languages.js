var language_json;

function setLanguage(lang) {
    $.ajax({
        url: '/languages/' + lang + '.json',
        dataType: 'json', async: false, dataType: 'json',
        success: function (rsp) { language_json = rsp }
    });
    $('#menu_features').text(language_json.menu.features);
    $('#menu_about').text(language_json.menu.about);
    $('#menu_projects').text(language_json.menu.projects);
    $('#menu_contact').text(language_json.menu.contact);
    $('#header_my_name').text(language_json.header.my_name);
    $('#header_my_work').text(language_json.header.my_work);
    $('#header_my_skills').text(language_json.header.my_skills);
    $('#header_my_portfolio').text(language_json.header.my_portfolio);
    $('#feature_h3').text(language_json.menu.features);
    $('#feature_f').text(language_json.features.feature_fast);
    $('#feature_f_text').text(language_json.features.feature_fast_text);
    $('#feature_r').text(language_json.features.feature_resp);
    $('#feature_r_text').text(language_json.features.feature_resp_text);
    $('#feature_i').text(language_json.features.feature_int);
    $('#feature_i_text').text(language_json.features.feature_int_text);
    $('#feature_d').text(language_json.features.feature_dyn);
    $('#feature_d_text').text(language_json.features.feature_dyn_text);
    $('#about_h3').text(language_json.about.about_me);
    $('#about_who').text(language_json.about.who_i_am);
    $('#about_text').text(language_json.about.about_me_text);
    $('#about_proficient').text(language_json.about.proficent);
    $('#about_expert').text(language_json.about.expert);
    $('#about_learning').text(language_json.about.learning);
    $('#projects_h3').text(language_json.projects.my_projs);
    $('#projects_w2m_text').text(language_json.projects.w2m_about);
    $('#projects_w2p_text').text(language_json.projects.w2p_about);
    $('#contact_h3').text(language_json.contact.contact_me);
    $('#contact_name').text(language_json.contact.c_n_text);
    $('#contact_email').text(language_json.contact.c_e_text);
    $('#contact_message').text(language_json.contact.c_m_text);
    $('#contact_button').text(language_json.contact.c_b_text);
}

$(document).ready(function () {
    setLanguage("en");
});