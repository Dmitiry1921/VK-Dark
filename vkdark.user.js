// ==UserScript==
// @name         VK Dark
// @namespace    https://github.com/
// @version      0.2.3
// @description  Изменяет внешний вид Вконтакте на темный
// @author       Dmitriy1921
// @downloadURL  https://github.com/Dmitiry1921/VK-Dark/raw/master/vkdark.user.js
// @updateURL    https://github.com/Dmitiry1921/VK-Dark/raw/master/vkdark.meta.js
// @supportURL   https://vk.com/dmitriy1921
// @homepage     https://github.com/Dmitiry1921/VK-Dark/blob/master/README.md
// @include      http://vk.com/*
// @include      https://vk.com/*
// @include      https://vkpay.io/*
// @include      https://*.vkforms.ru/*
// @exclude      https://vk.com/notifier.php?*
// @icon         https://github.com/Dmitiry1921/VK-Dark/raw/master/src/icon.svg
// @icon64       https://github.com/Dmitiry1921/VK-Dark/raw/master/src/icon.svg
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @run-at       document-start
// @license MIT
// ==/UserScript==
// Пункт меню, добавляется после старта браузера
const styles = {
    'vkdark-main': `.ui_search_new.ui_search_btn_large .ui_search_button_search,
.ui_search_new.ui_search_dark .ui_search_button_search,
.ui_search_new.ui_search_field_empty .ui_search_button_search {
  margin-left: 1px;
}
.page_photos_module,
.page_square_photo {
  height: 135px;
}
.page_photos_module {
  padding: 5px;
}
.page_square_photo {
  width: 135px;
}
.audio_page_player .audio_page_player_title {
  color: inherit;
}
.audio_layer_container .audio_page_layout .audio_search {
  margin: -1px 20px 10px;
}
.im-mess.im-mess_selected:last-child:before,
.im-mess.im-mess_unread:last-child:before {
  content: none !important;
}
.page_block._audio_page_content_block:before,
.audio_page_layout .audio_block:before,
.im-aside-notice,
.im-page.im-page_classic.im-page_group .im-group-online .im-group-online--inner,
.media_voting,
.im-page_classic .im-page--chat-header-in,
.im-audio-message-track,
.im-audio-message_recording,
.im-audio-message_recorded {
  box-shadow: 0 0 0 1px #242424 !important;
}
.im-page_classic.im-page .im-page--dialogs-search,
.CatalogBlock--divided:before {
  box-shadow: 0 0 0 1px #1a1a1a !important;
}
.im-page_classic.im-page .im-page--chat-body-abs,
.im-page_classic.im-page .im-page--chat-input .im-chat-input,
.im-page_classic.im-page .im-page--dialogs-footer,
.Button--mobile,
._playlist_page_content_block {
  box-shadow: 0 1px 0 0 #1a1a1a, 0 0 0 1px #1a1a1a !important;
}
.im-mess.im-mess_selected + .im-mess:before,
.im-mess.im-mess_unread + .im-mess:before {
  height: 0 !important;
}
.CatalogBlock--divided:before,
.Mailings_desktop .GroupPage__footer,
.top_notify_cont ._notify_unread .feed_row:first-child .feedback_row_wrap,
.page_block,
.mv_info,
.CatalogBlock--divided:first-child:before,
.CatalogSection:first-child:before,
.post_top_info_wall_like,
.post_top_info_wall_event,
.post_top_info_wall_group,
.post_top_info_wall_guide,
.post_top_info_wall_mention,
.post_top_info_wall_podcast,
.post_top_info_wall_poll_vote,
.post_top_info_wall_reply,
.post_top_info_wall_vkgo {
  box-shadow: none !important;
}
.post_top_info_wall_guide,
.post_top_info_wall_mention,
.post_top_info_wall_reply,
.im-create.im-create_classic .im-create--table,
.Panel_block_2RPF-,
.Page_contentPanel_3WDOJ {
  box-shadow: 0 1px 0 0 #242424, 0 0 0 1px #242424 !important;
}
.page_square_photo {
  margin: 0;
}
.im-chat-input--scroll,
.im-replied {
  border-radius: 5px;
}
.im-chat-input--scroll .im-fwd.im-fwd_msg {
  padding: 5px 7px;
}
.chat_cont_sh_bottom,
.chat_cont_sh_top {
  background: linear-gradient(180deg, rgba(216, 223, 230, 0), #3b3f41 80%) !important;
}
.audio_page_player2.audio_page_player_fixed,
.audio_layer_container .audio_page_player_wrap {
  box-shadow: 0 5px 10px #242424 !important;
}
.audio-msg-track .slider .slider_amount {
  background: transparent !important;
}
.ChatSettingsInfo {
  box-shadow: 0 1px 0 #242424 !important;
}
.List--border,
.ChatSettingsMembersWidget {
  box-shadow: 0 1px 0 #242424, 0 -1px 0 #242424 !important;
}
.page_list_module .line_cell .desc_info,
.page_list_module .line_cell .extra_info,
.page_list_module .line_cell .info {
  padding: 4px 0 0 7px;
}
.poster__slider-arrow._right {
  box-shadow: -5px 0 5px 0 #3b3f41 !important;
}
.poster__slider-arrow._left {
  box-shadow: 5px 0 5px 0 #3b3f41 !important;
}
.chats_sp.fc_clist_search_icon {
  margin: 10px 7px 0 0 !important;
}
.post_top_info_ads_group_members {
  box-shadow: 0 0 0 1px #242424, 0 1px 0 0 #242424 !important;
}
.ui_rmenu_count {
  padding: 1px 0;
}
.emoji_sticker_image {
  border-radius: 3px;
}
.ui_rmenu_count {
  float: left;
}
.im-create.im-create_material {
  position: absolute;
}
.wall_module .post {
  padding-top: 3px;
}
.fakeinput,
div[contenteditable=true],
input.big_text,
input.search,
input.text,
textarea,
.page_media_poll_wrap,
.ui_tabs.ui_tabs_box,
.im-page--chat-header,
.tabbed_box .summary_tab .summary_tab3:hover,
.tabbed_box .summary_tab_sel .summary_tab3:hover,
.tabbed_box .summary_tab_sel a:hover,
.tabbed_box .summary_tab a:hover,
.friends_import_row:hover,
.audio_pl_snippet,
div.fc_tab_txt,
.ui_tabs_header,
.wdd_text,
.wall_module .reply_form,
.im-mess.im-mess_gift,
.PageSection--gradient:before {
  background: none !important;
}
html,
body,
.im-page_classic.im-page .im-chat-history-resize,
.im-create,
#profile_groups_link:hover,
.gift_tt_show_all,
#page_wrap,
.MassMentionWarning {
  background-color: #1a1a1a !important;
}
.article_ed_layer,
.article_layer,
.article,
.photos_container_edit_grid .photos_photo_edit_row,
.pe_filter_thumb.pe_filter_selected,
.pe_actions,
.page_actions_wrap,
#top_profile_menu,
.piechart_col_header th,
.ui_scroll_default_theme > .ui_scroll_bar_container > .ui_scroll_bar_outer > .ui_scroll_bar_inner,
.audio_page_player2 .audio_page_player_track_slider.slider.slider_size_1 .slider_slide,
.photos_choose_upload_area,
.web_cam_photo,
.photos_choose_bottom,
.deep_active .replies .reply_field_wrap .reply_field,
.deep_active .replies .wl_reply_form_wrap .reply_field_wrap .reply_field,
.deep_active.wall_module .replies .reply_field_wrap .reply_field,
.deep_active.wall_module .replies .wl_reply_form_wrap .reply_field_wrap .reply_field,
.deep_active.wall_module .wl_replies_block_wrap .reply_field_wrap .reply_field,
.deep_active.wall_module .wl_replies_block_wrap .wl_reply_form_wrap .reply_field_wrap .reply_field,
.deep_active .wl_replies_block_wrap .reply_field_wrap .reply_field,
.deep_active .wl_replies_block_wrap .wl_reply_form_wrap .reply_field_wrap .reply_field,
#mv_comments_header,
.gifts_box_header,
.gifts_constr_preview,
.wk_voting_option_bar,
.result_list ul li.active,
.selector_container,
.result_list ul,
.summary_tab2:hover,
input.dark,
.sticker_hints_tt,
.deep_active .replies .reply_fakebox,
.like_share_emoji_wrap div[contenteditable=true],
.tt_default,
.tt_default_right,
.AudioPlaylistSnippet,
.ActionsMenu__inner,
.ui_actions_menu,
.ms_items_more,
.media_link__label,
.feed_friends_recomm .ui_gallery_item:first-child,
.privacy_dropdown .header,
.privacy_dropdown .body,
.privacy_dropdown .l_item,
.privacy_dropdown .l_item_sel,
.Dropdown__in,
.emoji_tabs,
.emoji_bg,
.video_choose_upload_area,
.video_add_external,
.video_choosebox_bottom,
.im-to-end:focus .im-to-end__button,
.im-to-end:hover .im-to-end__button,
.im-to-end__button,
.links-list__item:hover,
.PopupHeader,
.ChatSettingsMembersWidget__add:before,
.im_stickers_my_tip,
.medadd_c_linkcon,
.scrollbar_inner,
.scrollbar_hovered,
.scrollbar_inner:hover,
.friends_cur_filters .token,
.idd_popup .idd_items_content,
.idd_popup .idd_header_wrap,
.audio_pl_edit_box .ape_cover,
#audio_status_tt .audio_status_sep,
.audio_row__more_actions .audio_row__more_action:hover,
#groups_menu_items .groups_edit_menu_items .groups_edit_menu_item .groups_edit_menu_item_line,
.market_item_photo_container,
.market_comments_header:hover,
.market_comments_header,
.wke_b:hover,
.mv_desc .can_edit:hover,
.EditableLabel:hover .EditableLabel__text,
.MainActions_action_3owFz:after,
.MainStatus_button_1p4_4,
.Button_block_2bjH0.Button_secondary_3vjw8,
.Card__hr,
.wddi_over,
.im-page.im-page_classic.im-page_group .im-group-online,
.media_voting_option,
.sticker_hints_arrow.sticker_left,
.sticker_hints_arrow.sticker_right,
.mv_info .ui_rmenu,
.bd_arrow,
.bd_day_head,
.msg,
input.text.ts_input,
.poster__change-bkg-btn,
input.text.ts_input:focus,
.audio_pl_edit_box .ape_add_audios_btn:hover,
.audio_pl_edit_box .ape_add_pl_audios_btn:hover,
.docs_choose_rows .docs_item:hover,
.docs_choose_upload_area,
.docs_choose_upload_area:hover,
.button_gray button.hover,
.button_gray button:hover,
.flat_button.secondary.hover,
.flat_button.secondary:hover,
textarea,
.pv_cont .pv_can_edit:hover,
em.ts_clist_hl,
.audio_w_covers .audio_row.ui_gridsorter_moveable .audio_row_content,
.ui_search_sugg_list,
.im-page .im-page--history-new-bar:after,
.im-page .im-page--history-new-bar:before,
.ListItem--border:before,
.replies_open,
.wr_header,
.wall_module .page_media_thumbed_link,
.button_gray button,
.flat_button.secondary,
.im_stickers_bl_wrap,
.ap_layer_wrap .ap_layer__content,
div.wdd,
div.wdd.wdd_focused,
.ui_search_new .ui_search_input_inner,
.ui_search_new.ui_search_dark .ui_search_input_inner,
.payments_money_transfer_comment,
.payments_money_transfer_amount,
.im_stickers_buy_header,
.im-page .im-page--top-date-bar,
#mail_box_editable,
.im-mess .im-mess--post,
.feedback_row_answer,
.payments_money_transfer_amount_wrap,
.top_notify_show_all,
.im-mess.im-mess_light,
.bd_day_cell.holiday,
.settings_separated_row + .settings_separated_row:after,
.ui_search_new.ui_search_btn_large .ui_search_button_search,
.ui_search_new.ui_search_dark .ui_search_button_search,
.stories_link,
.CatalogBlock__separator,
.Button--tertiary:not(.Button--disabled):focus,
.Button--tertiary:not(.Button--disabled):hover,
.Select__option--selected,
.Select__option:hover,
.ui_search_new.ui_search_field_empty .ui_search_button_search,
.disabled.selector_container,
body.author_page_body,
.author_page_layer,
.gift_tt_show_all,
.article_layer .article_layer__content_footer,
.audio_pl_edit_box .ape_add_audios_btn,
.audio_pl_edit_box .ape_add_pl_audios_btn,
.verification_alert.default,
.wdd_hl,
.payments_box_wide .payments_getvotes_method_opt:hover,
.payments_box_wide .payments_box_menu .payments_getvotes_active_row,
.payments_box_wide .payments_box_menu .payments_getvotes_active_row:hover,
.im-audio-message_recording,
.im-audio-message_recorded,
.im-dropbox,
.im-dropbox--visible,
.im-dropbox--rect,
.im-dropbox--rect .dropbox_over,
.bt_tag_label {
  background-color: #242424 !important;
}
.im-create .im-create--tabs,
.ui_rmenu_item:hover,
.ui_rmenu_subitem:hover,
.ui_rmenu_item_sel,
.ui_rmenu_item_sel:hover,
.poster__toolbar,
.poster__slider-arrow,
.apps_i_wrap,
.apps_i_policy,
.apps_options_bar,
.apps_footer,
.audio_pl_snippet2,
#fc_contacts,
.fc_content,
.chat_onl_inner,
.fc_tab,
.fc_tab_notify,
#wk_box,
.pv_author_block,
.faq_tabs.ui_tabs,
.tickets_post_field,
.owner_photo_additional,
.MessageForward__content,
.article_ed_layer .article_ed_layer__header,
.pe_tabs_panel,
.photo_upload_separator,
.wall_module .reply_fakebox,
.tickets_header,
.box_msg,
.box_msg_gray,
.result_list ul li.active,
.selector_container td.selector .token_inner,
.selector_container td.selector .token_prefix,
.emoji_sticker_item.over,
.emoji_sticker_item:hover,
.im-page--toolsw,
.AudioPlaylistSnippet .ActionButton--shuffle:hover,
.im-chat-input,
.ActionsMenu__item--hover,
.ActionsMenu__item:hover,
.ui_actions_menu_item:hover,
.media_selector .ms_items_more .ms_item:hover,
.notify_sources_tt_content .content:not(:hover) .line_cell.selected,
.notify_sources_tt_content .line_cell:hover,
.wall_module:not(.search_results) .post--with-likes:not(.post_copy):not(.post_btl):not(.post_wf):not(.post_fr_likes) .wall_text .media_link:last-child,
.privacy_dropdown .item_sel,
.privacy_dropdown .item_sel_plus,
.privacy_dropdown .l_header,
.privacy_dropdown .l_header .l_header_label,
.privacy_dropdown .l_item:hover,
.privacy_dropdown .l_item_sel:hover,
.Dropdown__item:hover,
.mention_tt_actions,
.emoji_tt_wrap,
.emoji_tab_sel,
.emoji_tab_sel:hover,
.emoji_tab:hover,
.emoji_tabs_l_s:hover,
.emoji_tabs_r_s:hover,
.emoji_tabs_l_s,
.emoji_tabs_r_s,
.emoji_shop:hover,
.emoji_cat_title,
.im_sticker_bl,
.ui_search_fltr,
.idd_popup .idd_item.idd_hl,
#apps_layer .apps_header_wrapper,
#groups_menu_items .groups_edit_menu_items .group_apps_list_row_drag_wrapper,
.ui_ownblock:hover,
.market_item_content,
.bookmark_footer,
.wl_post_reply_form_forbidden,
.wpost_post,
.wke_controls,
.wke_page_title_cont,
.pages_header_info,
.pages_history_header_wrap,
#mv_pl_tt .mv_tt_add_playlist:hover,
#mv_pl_tt .mv_tt_add_playlist,
.Panel_block_2RPF-,
.TopMenu_block_1KqlS,
.Panel_footer_epjyB,
.Panel_header_2eRoj,
.Page_contentPanel_3WDOJ,
.Mailings_desktop .GroupPage__footer,
.Button--secondary__29JKy,
.DesktopRoot,
.Card,
.wddi,
.im-aside-notice,
.im-page.im-page_classic.im-page_group .im-group-online .im-group-online--inner,
.media_voting,
.audio_row__more_actions .audio_row__more_action,
.im-page_classic.im-page .im-page--dcontent,
.submit_post,
.im_stickers_store_wrap .ui_tabs,
.page_block_header,
div.fc_clist_filter_wrap,
.flat_button.ui_load_more_btn,
.settings_block_footer,
.mv_info,
.top_profile_mrow:hover,
.photos_period_delimiter_fixed,
.tabbed_box .summary_tab_sel .summary_tab2,
.audio_pl_edit_box .ape_header,
.group_l_row,
.audio_layer_container .audio_page_player,
.box_body,
.fc_msgs_unread,
.pv_cont .narrow_column,
.box_body .im_stickers_store_wrap .ui_tabs,
.ap_layer .audio_pl_snippet .audio_pl_snippet__header_inner,
.audio_pl_snippet .audio_pl_snippet__header,
.photos_container .photos_row,
.box_controls,
.ts_cont_wrap,
.feedback_row_wrap.unread:not(.feedback_row_touched),
.pv_white_bg,
.pva_period_fixed,
.wk_history_tabs,
.ChatSettings__content,
.ChatSettingsInfo,
.List,
.ChatSettingsMembersWidget,
.Button--mobile,
.ChatSettingsInvitationLink,
.ChatSettingsResetInvitationLink__text,
.SubmitArea,
.audio_pl_snippet2 .audio_shuffle_all_button:hover,
.audio_page_layout .audio_page_separator,
input.BlockSearchInput,
.photos_container_edit_grid .photos_photo_edit_row_desc_placeholder,
.online.mobile:after,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--photo .online.mobile:after,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--photo .online.mobile:after,
.nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--photo .online.mobile:after,
.stl_active.over_fast #stl_bg,
.wall_module .post_like:hover,
.wall_module .post_reply:hover,
.wall_module .post_share:hover,
.audio_row:hover:not(.audio_row__current) .audio_row_content,
.left_count_wrap,
.mail_box_cont,
#group_apps_list .group_apps_list_rows .group_apps_list_row .group_apps_edit,
.apps_i_panel,
.page_status_editor .editor,
.im-page-pinned,
.box_title_wrap.box_grey,
.eltt,
.bd_day_cell,
.im-chat-input--scroll,
#top_notify_wrap,
.im-mess.im-mess_selected + .im-mess:before,
.im-mess.im-mess_unread + .im-mess:before,
.im-chat-input .im-chat-input--txt-wrap,
#side_bar ol li .left_row:hover,
.info_msg,
.audio_pl_edit_box .ape_add_pl_audios_btn,
#mv_publish,
.audio_pl_edit_box .ape_list_header,
.thumbed_link__thumb,
.thumbed_link--chat-invitation,
.thumbed_link__label,
.im-page_classic.im-page .im-chat-history-resize,
.im-create,
.deep_active .replies .reply_box_inner_wrap.fixed,
.deep_active.wall_module .replies .reply_box_inner_wrap.fixed,
.deep_active.wall_module .wl_replies_block_wrap .reply_box_inner_wrap.fixed,
.deep_active .wl_replies_block_wrap .reply_box_inner_wrap.fixed,
.Select--opened .Select__control,
.Select__menu,
.medadd_inline_editable:hover,
.settings_line.unfolded,
.PeerProfile,
.wddi_over .wdd_hl,
.Modal__header--blue,
.MultiSelect__search,
.BaseModal__content,
.TokenInput__input,
.Modal__footer,
.EditorTabs__header,
.StickersPanel__header,
.StickersPanel__tab--recent,
.settings_alert .header,
.im-audio-message-track,
.docs_choose_dropbox_wrap,
.notifications_new_events,
.group_api_url_desc,
.groups_edit_event_log_controls {
  background-color: #3b3f41 !important;
}
.page_photo.page_action_menu_groups .group_notification_settings .group_notification_setting:hover,
.page_actions_header,
.page_actions_item:hover:not(.grey_hoverable),
.tu_last:hover,
.im-page .im-page--mess-search,
.gifts_constr_option:hover,
.audio_pl_edit_box .ape_pl_item:hover,
.im-mess.im-mess_selected:last-child:before,
.im-mess.im-mess_unread:last-child:before,
.audio_page_player2 .audio_page_player_track_slider.slider.slider_size_1 .slider_back,
.audio_page_player2 .audio_page_player_track_slider.slider.slider_size_1 .slider_slide,
.audio_page_player2 .audio_page_player_volume_slider.slider.slider_size_1 .slider_slide {
  background-color: #626568 !important;
}
#page_header_cont .back,
.fc_tab_head,
.box_title_wrap,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected,
.page_block,
.im-page_classic .im-page--chat-header .im-page--toolsw,
.audio_page_player2 .audio_page_player_status.audio_page_player_btn_enabled .btn_icon,
.audio_page_layout .audio_search_wrapper,
.audio_page_layout .has_friends_block .audio_page__rows_wrap,
.audio_page_layout .audio_friends_list,
.audio_page_player.audio_page_player_fixed,
.audio_page_player2.audio_page_player_fixed,
.flat_button.secondary_dark,
.ui_search,
.ui_grey_block,
.im-page .im-page--history-new-bar,
.im-page .im-page--history-new-bar > span,
.im-page_classic.im-page .im-page--chat-body-wrap-inner,
.im-page_classic.im-page .im-page--chat-input .im-chat-input,
.CatalogBlock--divided,
.profile_info_header,
.profile_info_edit,
.im-create .im-create--table > div,
.Input[readonly],
.help_table_question_visible,
.wall_module .reply_fakebox_wrap,
.wall_module .reply_box,
.language_box_row:hover,
.tickets_thank_you_form,
.CatalogSection,
.im-navigation--to-end .im-navigation__button,
.search_filters_minimized_text,
.friends_search_filters,
.friends_search_import,
.photos_edit_selection_header,
.audio_pl_attach_preview,
.fc_msgs,
.PageNavigation_wrap,
.im-top-banner,
#payments_box_right_col,
.wall_reply_text,
.wall_post_cont,
._wall_post_cont,
.reply,
.reply_dived,
.reply_replieable,
._post,
.group_tokens_row {
  background-color: #2d2f30 !important;
}
.top_audio_play__button,
.top_audio_play__button:hover,
.top_audio_play__button:hover:before,
.top_audio_play__button:before,
.article > cite:before,
.article > cite:after,
.emoji_sticker_image {
  background-color: #ffffff !important;
}
a.fc_contact_over,
.chat_tab_wrap:hover,
.ui_search_sugg_list .ui_search_suggestion_selected,
.nim-dialog.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_unread-out .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted):hover.nim-dialog_unread-out .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted):hover.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text,
.audio_layer_container .audio_friend:hover,
.audio_page__shuffle_all .audio_page__shuffle_all_button:hover,
.im-mess.im-mess_selected:not(.im-mess_is_editing),
.im-mess.im-mess_selected:not(.im-mess_is_editing):hover,
.my_current_info:hover,
.no_current_info:hover,
.profile_more_info_link:hover,
.audio_row.audio_row__current .audio_row_content,
.tabbed_box .summary_tab_sel a:hover,
.tabbed_box .summary_tab a:hover,
.top_notify_cont .feedback_row:not(.dld).hover,
.top_notify_cont .feedback_row:not(.dld):hover,
a.ts_contact.active,
a.ts_search_link.active,
.ListItem--active,
.ListItem--can-be-hovered.ListItem--selectable:hover,
.article_ed_layer .article_ed_layer__list_item:not(.article_ed_layer__list_item_current):hover,
.media_voting_can_vote.media_voting_clickable_option .media_voting_option_wrap:not(.media_voting_option_selected):hover .media_voting_option,
.im-mess.im-mess_unread:not(.im-mess_light),
.feed_new_posts:hover,
.pv_like:hover,
.im-replied,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic,
.nim-dialog:not(.nim-dialog_deleted):hover,
.im_msg_audiomsg .audio-msg-track:not(.audio-msg-player):hover,
.flat_button.ui_load_more_btn:hover,
.im-mess.im-mess_search:hover,
.olist_item_wrap:hover,
.feedback_row_clickable:not(.feedback_row_touched):hover,
.feed_row ~ .feed_row .feedback_row_clickable:not(.feedback_row_touched):hover,
.top_notify_show_all:hover,
body .im-page--back-btn:hover,
.AuthorPageHeader__create:hover,
.eltt .eltt_fancy_action:hover,
.groups_edit_event_log_item_main:hover,
.bt_reporter_row:hover,
.line_value:hover {
  background-color: rgba(0, 0, 0, 0.2) !important;
}
.slider .slider_amount,
.slider .slider_handler,
.audio_page_player2 .audio_page_player_play .icon,
.audio-msg-track .audio-msg-track--btn,
._audio_page_content_block .ui_tabs.ui_tabs_sliding .ui_tabs_slider,
.recoms_special_block_inner > .round_button,
.PlaceholderSmall__actions > .flat_button {
  background-color: #e82f94 !important;
}
.audio-msg-track .audio-msg-track--wave-wrapper .audio-msg-track--wave path {
  stroke: #e82f94 !important;
}
.slider .slider_back {
  background-color: #A9B7C5 !important;
}
.top_nav_btn.active,
.top_nav_btn:hover,
.top_audio_player:hover,
.top_nav_link:hover,
.top_nav_link.active {
  background-color: rgba(36, 36, 36, 0.5) !important;
}
.top_nav_btn#top_notify_btn .top_nav_btn_icon,
.top_nav_btn#top_notify_btn:hover .top_nav_btn_icon {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"20"%20height%3D"20"%20viewBox%3D"0%200%2020%2020"><path%20fill%3D"%23fff"%20fill-rule%3D"evenodd"%20d%3D"M8%2C18%20C6.64583333%2C18%205.5%2C17.3%205.5%2C16%20L10.5%2C16%20C10.5%2C17.3%209.35416667%2C18%208%2C18%20Z%20M13.9956933%2C11%20C13.9956933%2C12.5%2016%2C12.5%2016%2C13.5%20C16%2C14%2016%2C15%2013.8955984%2C15%20L1.98430985%2C15%20C-6.19060359e-13%2C15%20-1.62536651e-13%2C14%20-1.63424829e-13%2C13.5%20C-1.63369318e-13%2C12.5%201.98430985%2C12.5%202%2C11%20L2%2C8%20C2%2C4%204.09724901%2C1.5%207%2C1.1%20L7%2C1%20C7%2C0.4%207.5%2C5.74053187e-17%208%2C0%20C8.5%2C0%209%2C0.4%209%2C1%20L9%2C1.1%20C11.902751%2C1.5%2013.9956933%2C4%2013.9956933%2C8%20L13.9956933%2C11%20Z"%20transform%3D"translate(2%201)"%2F><%2Fsvg>') !important;
}
.top_nav_btn#top_audio .top_nav_btn_icon,
.top_nav_btn#top_audio:hover .top_nav_btn_icon {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"20"%20height%3D"20"%20viewBox%3D"0%200%2020%2020"><path%20fill%3D"%23fff"%20fill-rule%3D"evenodd"%20d%3D"M14%2C11.1552322%20L14%2C5.5%20L7%2C7.5%20L7%2C15.2999878%20C7%2C15.2999878%206.99923979%2C15.2998738%206.99774901%2C15.2996427%20C6.99305423%2C16.449672%205.98201611%2C17.5525634%204.53840209%2C17.8858479%20C2.90786903%2C18.2622862%201.34293783%2C17.5143682%201.04303041%2C16.2153265%20C0.743122996%2C14.9162848%201.82180821%2C13.5580399%203.45234127%2C13.1816017%20C3.98965862%2C13.0575522%204.51985206%2C13.0556001%205%2C13.1552322%20L5%2C3.9955775%20C5%2C3.44483697%205.42843442%2C2.88315425%205.95693506%2C2.73901771%20L15.0430649%2C0.26098229%20C15.568787%2C0.117603555%2016%2C0.447563354%2016%2C0.999660731%20L16%2C13.2999878%20C15.999253%2C13.2998718%2015.9985027%2C13.2997528%2015.9977491%2C13.2996309%20C15.9930612%2C14.4496644%2014.9820211%2C15.5525622%2013.5384021%2C15.8858479%20C11.907869%2C16.2622862%2010.3429378%2C15.5143682%2010.0430304%2C14.2153265%20C9.743123%2C12.9162848%2010.8218082%2C11.5580399%2012.4523413%2C11.1816017%20C12.9896586%2C11.0575522%2013.5198521%2C11.0556001%2014%2C11.1552322%20Z"%20transform%3D"translate(1%201)"%2F><%2Fsvg>') !important;
}
.im-page--back-btn {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2216%22%20viewBox%3D%220%200%209%2016%22%20width%3D%229%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m8%2015.9c-.2%200-.4-.1-.6-.3l-7-7c-.3-.3-.3-.9%200-1.2l7-7c.3-.3.9-.3%201.2%200s.3.9%200%201.2l-6.4%206.4%206.4%206.4c.3.3.3.9%200%201.2-.2.2-.4.3-.6.3z%22%20fill%3D%22%23828a99%22%20opacity%3D%22.7%22%2F%3E%3C%2Fsvg%3E") !important;
}
#side_bar .left_icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='1071' style=''%3E%3Crect id='backgroundrect' width='100%25' height='100%25' x='0' y='0' fill='none' stroke='none'/%3E%3Cg class='currentLayer' style=''%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cg fill='%23b0ccda' id='svg_1' class='' fill-opacity='1'%3E%3Cpath d='M3.34 908.66a8 8 0 1111.32-11.32 8 8 0 01-11.32 11.32zm3.54-3.54a11.98 11.98 0 011.92 2.35c.32.46.8.47 1.12.03 0 0 1.9-1.67-.92-4.5-2.83-2.83-4.5-.92-4.5-.92-.46.28-.43.81.03 1.12 0 0 .93.5 2.35 1.92zm3.72-1.97c.32.46 1.12.44 1.8-.04.68-.47.97-1.22.66-1.68-.32-.45-1.13-.43-1.8.04-.68.48-.98 1.23-.66 1.68zm.8 2.28c.18.35.74.44 1.28.19s.83-.74.67-1.1c-.17-.36-.74-.44-1.27-.2-.54.26-.84.75-.67 1.1zm-4.85-4.86c.36.17.85-.13 1.1-.67s.16-1.1-.2-1.27c-.35-.17-.84.13-1.1.67-.24.53-.15 1.1.2 1.27zm2.3.83c.45.32 1.2.02 1.68-.65.47-.68.49-1.49.04-1.8-.46-.32-1.2-.03-1.68.65s-.5 1.48-.04 1.8zm.14-34.4a8 8 0 017.58 5.42 7.99 7.99 0 01-5 10.15c-.83.29-1.7.43-2.58.43a7.91 7.91 0 01-3.52-.83 7.94 7.94 0 01-4.04-4.6 7.99 7.99 0 015-10.14 7.96 7.96 0 012.56-.43zm.78 1.76c-3.27 2.49-3.5 5.31-3.5 6.12v.19l.18.05a3.76 3.76 0 001.19.21c.33 0 .65-.05.94-.16l.16-.06.01-.17c.09-1.13.61-3.35 3.19-5.52l.3-.26-.36-.17a6.7 6.7 0 00-1.56-.53l-.11-.02-.1.07-.34.25zm-6.92 3.66l-.07.16.13.12c.4.4 1.05 1 1.81 1.53l.35.24.06-.43a8.88 8.88 0 012.62-5.1l.63-.65-.88.2a6.64 6.64 0 00-4.65 3.93zm-.24 4.48l.1.06a10.41 10.41 0 005.24 1.68h.12a5.55 5.55 0 002.93-.83l.27-.18-.23-.23a8.2 8.2 0 00-1.57-1.19l-.12-.07-.12.06a3.76 3.76 0 01-1.59.34c-1.96 0-3.88-1.43-4.85-2.29l-.4-.34-.03.52c-.07.8 0 1.6.22 2.37l.03.1zm10.14 3.61l.16-.11-.06-.19a7.24 7.24 0 00-.69-1.42l-.14-.23-.22.16a6.73 6.73 0 01-3.85 1.13 9.9 9.9 0 01-3.54-.71l-1.06-.4.78.82a6.66 6.66 0 001.92 1.42 6.6 6.6 0 002.94.7 6.67 6.67 0 003.76-1.17zm2.44-3.02l.04-.1-.04-.1c-1.28-2.93-3.22-4.1-4.26-4.52l-.22-.1-.11.22c-.46.86-.6 1.59-.64 2.04l-.02.17.14.08a8.82 8.82 0 013.64 3.99l.18.38.26-.32a6.64 6.64 0 001.03-1.74zm0-2.69l.52.75-.05-.9a6.65 6.65 0 00-.34-1.8 6.66 6.66 0 00-1.87-2.82l-.16-.14-.17.13c-.57.44-1.07.9-1.49 1.38l-.23.26.32.14c.93.45 2.3 1.33 3.46 3zm-5.27-23.79l-.92-.89-.92.9a3.57 3.57 0 01-4.93 0 3.7 3.7 0 010-5.36l5.16-4.99a1 1 0 011.38 0l5.16 4.99a3.7 3.7 0 010 5.35 3.57 3.57 0 01-4.93 0zM7 855l2-4 2 4s-1 .5-2 .5-2-.5-2-.5zm4.82-36.9c1.7-5.76-3.27-8-3.27-8-.34 2.88-2.04 3.48-3.83 5-2.97 2.52-2.71 5-2.71 5-.22 3.84 4.88 5.52 4.88 5.52-2.33-4 1.1-6 1.1-6a6.4 6.4 0 004.21 6.48c7.1-3.64 2.08-11.24 2.08-11.24-.17 2.6-2.46 3.24-2.46 3.24zM3.47 765a.5.5 0 01-.5-.47l-.41-6.6a.35.35 0 01.6-.28L6.5 761l2.19-4.37a.35.35 0 01.62 0L11.5 761l3.35-3.35a.35.35 0 01.6.27l-.42 6.61a.5.5 0 01-.5.47H3.47zm.17 1h10.72c.22 0 .3.02.38.07a.45.45 0 01.2.19c.04.08.06.16.06.38v.72c0 .22-.02.3-.07.38a.45.45 0 01-.19.2c-.08.04-.16.06-.38.06H3.64c-.22 0-.3-.02-.38-.07a.45.45 0 01-.2-.19c-.04-.08-.06-.16-.06-.38v-.72c0-.22.02-.3.07-.38a.45.45 0 01.19-.2c.08-.04.16-.06.38-.06zm13.03 24.96l.05.11c.53.6.78 1.37.78 2.14 0 .85-.32 1.7-.98 2.32v1.76a.7.7 0 01-.7.71h-1.6a.7.7 0 01-.7-.7V796H4.48v1.3a.7.7 0 01-.7.7h-1.6a.7.7 0 01-.7-.7l-.02-1.82a3.14 3.14 0 01-.96-2.33 3.22 3.22 0 01.75-2.08l.05-.11c-.83-.07-1.3-.47-1.3-.98 0-.54.63-.98 1.4-.98.2 0 .44.05.69.15l.13-.3c.43-1.16 1-2.3 1.63-2.74 2.22-1.48 8.08-1.48 10.3 0 .64.43 1.2 1.57 1.63 2.74l.13.3a2 2 0 01.7-.15c.76 0 1.39.44 1.39.98 0 .52-.48.92-1.33.98zm-12.03-3.48c-.35.25-.8 1.27-1.2 2.52h11.23c-.4-1.25-.85-2.27-1.2-2.52-1.77-1.3-7.06-1.3-8.83 0zM3.6 792c-.77 0-1.4.44-1.4.98 0 .55.53.96 1.47.98.55.01 2.02.12 2.03-.08 0-1.16-1.33-1.88-2.1-1.88zm10.8 0c-.77 0-2.1.72-2.1 1.88.01.2 1.48.1 2.03.08.94-.02 1.47-.43 1.47-.98 0-.54-.62-.98-1.4-.98zM2.97 700h4.08c.33 0 .46.04.58.1a.68.68 0 01.28.28c.07.13.1.25.1.58v4.08c0 .33-.03.45-.1.58a.68.68 0 01-.28.28c-.13.07-.25.1-.58.1H2.96c-.33 0-.46-.04-.58-.1a.68.68 0 01-.28-.28c-.07-.13-.1-.25-.1-.58v-4.08c0-.33.03-.45.1-.58a.68.68 0 01.28-.28c.13-.07.25-.1.58-.1zm0 8h4.08c.33 0 .46.04.58.1a.68.68 0 01.28.28c.07.13.1.25.1.58v4.08c0 .33-.03.45-.1.58a.68.68 0 01-.28.28c-.13.07-.25.1-.58.1H2.96c-.33 0-.46-.04-.58-.1a.68.68 0 01-.28-.28c-.07-.13-.1-.25-.1-.58v-4.08c0-.33.03-.45.1-.58a.68.68 0 01.28-.28c.13-.07.25-.1.58-.1zm8 0h4.08c.33 0 .45.04.58.1a.68.68 0 01.28.28c.06.13.1.25.1.58v4.08c0 .33-.04.45-.1.58a.68.68 0 01-.28.28c-.13.07-.25.1-.58.1h-4.08c-.33 0-.46-.04-.58-.1a.68.68 0 01-.28-.28c-.07-.13-.1-.25-.1-.58v-4.08c0-.33.03-.45.1-.58a.68.68 0 01.28-.28c.13-.07.25-.1.58-.1zm2.72-8.56l2.88 2.88c.24.24.3.35.34.48.04.13.04.27 0 .4s-.1.24-.34.48l-2.88 2.88c-.24.24-.35.3-.48.34a.68.68 0 01-.4 0c-.13-.04-.24-.1-.48-.34l-2.88-2.88c-.24-.24-.3-.35-.34-.48a.68.68 0 010-.4c.04-.13.1-.24.34-.48l2.88-2.88c.24-.24.35-.3.48-.34a.68.68 0 01.4 0c.13.04.24.1.48.34zM8 741.93A7 7 0 012.07 736H1a1 1 0 110-2h1.07A7 7 0 018 728.07V727a1 1 0 112 0v1.07a7 7 0 015.93 5.93H17a1 1 0 110 2h-1.07a7 7 0 01-5.93 5.93V743a1 1 0 11-2 0v-1.07zM9 740a5 5 0 100-10 5 5 0 000 10zm0-3a2 2 0 110-4 2 2 0 010 4zm1.71-61.11c0 1.98 2.05 3.03 3.8 7 .56 1.26 2 3.11-5.51 3.11s-6.07-1.85-5.51-3.11c1.75-3.97 3.8-5.02 3.8-7v-2.33h-.43c-.24 0-.43-.18-.43-.4v-.77c0-.22.2-.39.43-.39h4.28c.24 0 .43.17.43.39v.78c0 .21-.2.39-.43.39h-.43v2.33zm1.74 8.07c.18-.05.25-.24.19-.41a9.55 9.55 0 00-1.02-2.03c-.45-.7-.13.32-1.3.32s-2.58-2.37-3.94-.32a9.46 9.46 0 00-1.01 2.03c-.07.17 0 .36.18.4.5.15 1.5.3 3.45.3 1.95 0 2.95-.15 3.45-.3zm2.32-58.54c-.73 1.16-3.03 2.01-5.77 2.01s-5.04-.85-5.77-2c-.15-.26-.23-.12-.23 0v1.7c0 1.66 2.69 3.37 6 3.37s6-1.71 6-3.37v-1.7c0-.12-.08-.26-.23 0zm0-4.36c-.7 1.03-3.02 1.78-5.77 1.78-2.75 0-5.06-.75-5.78-1.78-.14-.21-.22-.1-.22 0v2c0 1.5 2.69 2.73 6 2.73s6-1.22 6-2.72v-2.01c0-.1-.08-.21-.23 0zM9 615.5c-3.31 0-6 1-6 2.24v1.08c0 1.31 2.69 2.38 6 2.38s6-1.07 6-2.38v-1.08c0-1.23-2.69-2.24-6-2.24z' id='svg_2' fill='%23b0ccda'/%3E%3Cpath d='M14.77 624.92c-.73 1.16-3.03 2.01-5.77 2.01s-5.04-.85-5.77-2c-.15-.26-.23-.12-.23 0v1.7C3 628.3 5.69 630 9 630s6-1.71 6-3.37v-1.7c0-.12-.08-.26-.23 0zm0-4.36c-.7 1.03-3.02 1.78-5.77 1.78-2.75 0-5.06-.75-5.78-1.78-.14-.21-.22-.1-.22 0v2c0 1.5 2.69 2.73 6 2.73s6-1.22 6-2.72v-2.01c0-.1-.08-.21-.23 0zM9 615c-3.31 0-6 1-6 2.24v1.08c0 1.31 2.69 2.38 6 2.38s6-1.07 6-2.38v-1.08c0-1.23-2.69-2.24-6-2.24zm3.94 39c.1.53.2.77.46 1H5.03c.05-1.1 3.15-3 3.15-5.5-.53.5-2.76 1.29-3.15 1.5-.07.04-1.37-.7-1.57-1-.45-.65-.47-.75-.46-.88.03-.25.32-.37.48-.46.01 0 .86-.47 1.6-1.45.32-.76.57-1.4 1.84-2.03.48-.24.95-.42 1.28-.54a8.9 8.9 0 00-.55-1.64s.89.14 1.58.54c.55.32.93.9 1.05.96.32.15.8.01 2.1 1 2.62 2 1.13 4.98 1.12 5l-.56 3.5zm-9.3 1h10.72c.22 0 .3.02.38.07a.45.45 0 01.2.19c.04.08.06.16.06.38v1.72c0 .22-.02.3-.07.38a.45.45 0 01-.19.2c-.08.04-.16.06-.38.06H3.64c-.22 0-.3-.02-.38-.07a.45.45 0 01-.2-.19c-.04-.08-.06-.16-.06-.38v-1.72c0-.22.02-.3.07-.38a.45.45 0 01.19-.2c.08-.04.16-.06.38-.06zm11.2-56.92C14.46 599.55 13.2 602 9 602s-5.46-2.45-5.84-3.92l-1.02.09L3.87 595l2.25 2.81-.93.08c.29.76 1.01 1.76 2.81 2.03v-6.1a3 3 0 112 0v6.1c1.8-.27 2.52-1.27 2.8-2.03l-.92-.08 2.25-2.81 1.73 3.16-1.02-.1zM9 592a1 1 0 100-2 1 1 0 000 2zm-7.75-30.2a1 1 0 01.9-1.07l8.98-.79a1 1 0 011.08.9l.79 8.98a1 1 0 01-.9 1.08l-8.98.78a1 1 0 01-1.08-.9l-.79-8.98zM4 564a1 1 0 100-2 1 1 0 000 2zm3 3a1 1 0 100-2 1 1 0 000 2zm3 2a1 1 0 100-2 1 1 0 000 2zm3.93-4.18l2.2.2a1 1 0 01.9 1.07l-.79 8.97a1 1 0 01-1.07.91l-8.98-.79a1 1 0 01-.9-1.07l.08-1 8.22-.71a1 1 0 00.9-1.08l-.56-6.5zM1 542.52c0-.27.21-.5.49-.5h3.02c.27 0 .49.22.49.5v3.02c0 .27-.21.49-.49.49H1.49a.49.49 0 01-.49-.5v-3.02zm5 0c0-.27.21-.5.49-.5h3.02c.27 0 .49.22.49.5v3.02c0 .27-.21.49-.49.49H6.49a.49.49 0 01-.49-.5v-3.02zm5 0c0-.27.21-.5.49-.5h3.02c.27 0 .49.22.49.5v3.02c0 .27-.21.49-.49.49h-3.02a.49.49 0 01-.49-.5v-3.02zm-5-5c0-.27.21-.5.49-.5h3.02c.27 0 .49.22.49.5v3.02c0 .27-.21.49-.49.49H6.49a.49.49 0 01-.49-.5v-3.02zm5.55-4.15a.49.49 0 010-.69l2.13-2.13a.49.49 0 01.7 0l2.13 2.13a.49.49 0 010 .7l-2.14 2.13a.49.49 0 01-.69 0l-2.13-2.14zM1 537.51c0-.27.21-.49.49-.49h3.02c.27 0 .49.22.49.5v3.02c0 .27-.21.49-.49.49H1.49a.49.49 0 01-.49-.5v-3.02zm0-5c0-.27.21-.49.49-.49h3.02c.27 0 .49.22.49.5v3.02c0 .27-.21.49-.49.49H1.49a.49.49 0 01-.49-.5v-3.02zm5.04.71a.49.49 0 01.18-.67l2.62-1.5a.49.49 0 01.67.17l1.5 2.62a.49.49 0 01-.17.67L8.22 536a.49.49 0 01-.67-.17l-1.5-2.62zm6.42 2.9a.49.49 0 01.66-.18l2.62 1.51a.49.49 0 01.18.67l-1.51 2.62a.49.49 0 01-.67.18l-2.61-1.51a.49.49 0 01-.19-.67l1.52-2.62zM5 392v4l1.5-2 1.5 2v-4h5.5a1.5 1.5 0 011.5 1.5V404H4.5a.5.5 0 00-.5.5c0 .27.22.5.5.5H15v.5a.5.5 0 01-.5.5h-10a1.5 1.5 0 01-1.5-1.5v-11c0-.83.68-1.5 1.5-1.5H5zm3.96 28h1.08c.33 0 .45.04.58.1a.68.68 0 01.28.28c.07.13.1.25.1.58v11.08c0 .33-.04.45-.1.58a.68.68 0 01-.28.28c-.13.07-.25.1-.58.1H8.96c-.33 0-.46-.04-.58-.1a.68.68 0 01-.28-.28c-.07-.13-.1-.25-.1-.58v-11.08c0-.33.03-.46.1-.58a.68.68 0 01.28-.28c.13-.07.25-.1.58-.1zm-5 6.98h1.08c.33 0 .46.04.58.1a.68.68 0 01.28.29c.07.12.1.24.1.58v4.07c0 .34-.03.46-.1.58a.68.68 0 01-.28.28c-.13.07-.25.1-.58.1H3.96c-.33 0-.46-.03-.58-.1a.68.68 0 01-.28-.28c-.07-.12-.1-.24-.1-.58v-4.07c0-.34.03-.46.1-.58a.68.68 0 01.28-.29c.13-.06.25-.1.58-.1zm10-3.98h1.08c.33 0 .45.04.58.1a.68.68 0 01.28.28c.07.13.1.25.1.58v8.08c0 .33-.04.45-.1.58a.68.68 0 01-.28.28c-.13.07-.25.1-.58.1h-1.08c-.33 0-.46-.04-.58-.1a.68.68 0 01-.28-.28c-.07-.13-.1-.25-.1-.58v-8.08c0-.33.03-.45.1-.58a.68.68 0 01.28-.28c.13-.07.25-.1.58-.1zm-3.12 90.04c.41 3.52-.27 3.26-4.03 4.87-.72.3-.97-.2-.77-.74l.65-1.75-2.11-2.1-1.75.64c-.55.2-1.04-.05-.74-.76 1.6-3.77 1.35-4.45 4.87-4.04 0 0 4.05-5.75 8.69-5.11.1.01.17.05.2.1a.36.36 0 01.1.2c.64 4.64-5.1 8.7-5.1 8.7zm.82-4.7a1.25 1.25 0 101.76-1.77 1.25 1.25 0 00-1.76 1.77zM8 455v1h3v-1h5v5.01a1 1 0 01-1 .99H4a1 1 0 01-1-.99V455h5zm-6-3.99A1 1 0 013 450h13a1 1 0 011 1.01V454H2v-2.99zM7 450H5.5l1-2h6l1 2H12l-.5-1h-4l-.5 1zm2.61-142.28l1.56 4.4h3.89a.65.65 0 01.4 1.16l-3.22 2.42 1.2 4.45a.65.65 0 01-1.02.69L9 318.22l-3.42 2.62a.65.65 0 01-1.03-.69l1.2-4.45-3.2-2.42a.65.65 0 01.39-1.17h3.89l1.56-4.39a.65.65 0 011.22 0zM4.5 258c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm5 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm5 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm.46 88.48L12 345v-6l2.96-1.48v-.01a.5.5 0 01.5-.51h.04c.28 0 .5.23.5.51v8.98a.5.5 0 01-.5.51h-.05a.5.5 0 01-.49-.51v-.01zM8.16 345l.6 3.78a.95.95 0 01-.8 1.09 1 1 0 01-1.12-.82L6.16 345H5a3 3 0 010-6h6v6H8.17zM10 284.5V280l5 5h-4.5a.5.5 0 01-.5-.5zM4.28 280H9v4.72c0 .44.05.6.13.77.1.16.22.29.38.38.17.08.33.13.77.13H15v6.72c0 .44-.05.6-.13.77a.9.9 0 01-.38.38c-.17.08-.33.13-.77.13H4.28c-.44 0-.6-.05-.77-.13a.9.9 0 01-.38-.38c-.08-.17-.13-.33-.13-.77v-11.44c0-.44.05-.6.13-.77a.9.9 0 01.38-.38c.17-.08.33-.13.77-.13zM15.5 142.08c.85 0 1.6.76 1.49 1.63v7.65c0 .87-.75 1.64-1.6 1.64H2.6c-.85 0-1.6-.76-1.6-1.64v-7.43c0-.87.75-1.85 1.6-1.85h1.39c.32 0 .53-.22.64-.44l.53-1.2c.1-.22.42-.44.64-.44h6.5c.32 0 .53.22.64.44l.53 1.2c.1.22.43.44.64.44h1.39zM9 151c2.17 0 4-1.83 4-4s-1.83-4-4-4-4 1.83-4 4 1.83 4 4 4zm0-6.5c1.41 0 2.5 1.09 2.5 2.5s-1.09 2.5-2.5 2.5-2.5-1.09-2.5-2.5 1.09-2.5 2.5-2.5zm4 32.32V171l-6 2v7.5l-.08-.02c.13.92-.6 1.92-1.77 2.35-1.3.47-2.64.05-3-.93-.36-1 .4-2.17 1.7-2.64a3.14 3.14 0 011.16-.2.75.75 0 010-.06v-9.04L15 167v11.5l-.08-.01c-.03.81-.68 1.66-1.68 2.08-1.27.55-2.63.2-3.04-.77-.41-.96.29-2.18 1.56-2.72a3.12 3.12 0 011.24-.26zM12 210H6v-2H4v2H3a1 1 0 01-1-1v-12a1 1 0 011-1h1v2h2v-2h6v2h2v-2h1a1 1 0 011 1v12a1 1 0 01-1 1h-1v-2h-2v2zm-6-8v-2H4v2h2zm8 0v-2h-2v2h2zm-8 4v-2H4v2h2zm8 0v-2h-2v2h2zm2.77 26.25c.1.4 1 4.54-1.6 4.75-1.09.1-2.28-1.62-3.18-2.53-.8-1-1.7-1.5-3.09-1.5s-2.19.5-3.08 1.5c-.9.91-2.1 2.63-3.09 2.53-2.49-.1-1.6-4.34-1.5-4.75.4-2.22 1.8-6.25 4.59-6.25 0 0 .9.1 1.6.5 1.19.5 1.78.5 3.08 0a5.48 5.48 0 011.6-.5c2.88 0 4.17 3.93 4.67 6.25zM11 230.5c0 .27.22.5.5.5a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5zm2 0c0 .27.22.5.5.5a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5zm-7-.5v-.5a.5.5 0 00-1 0v.5h-.5a.5.5 0 000 1H5v.5a.5.5 0 001 0v-.5h.5a.5.5 0 000-1H6zM9 92c5.4 0 6 2.7 6 4.1 0 .7-.24.9-1.68.9H4.8c-1.44 0-1.8-.2-1.8-.9 0-1.5.6-4.1 6-4.1zm0-1c-1.66 0-3-1.17-3-3.5S7.34 84 9 84s3 1.17 3 3.5S10.66 91 9 91zm-8 32.1c0-1.5 0-4.1 5-4.1s5 2.7 5 4.1c0 .7-.2.9-1.4.9H2.5c-1.2 0-1.5-.2-1.5-.9zm11.59.9l.01-.28c0-1.37-.04-3.34-1.47-4.7L12 119c4.5 0 5 2.7 5 4.1 0 .7-.2.9-1.4.9h-3.01zM6 118c-1.1 0-2-.83-2-2.5s.9-2.5 2-2.5 2 .83 2 2.5-.9 2.5-2 2.5zm6 0c-1.1 0-2-.83-2-2.5s.9-2.5 2-2.5 2 .83 2 2.5-.9 2.5-2 2.5zm1.23-87.64C15.43 31.09 17 32.9 17 35c0 1.79-1.12 3.35-2.81 4.24.08.48.38 1.13.82 1.78-1.58 0-2.42-.42-2.89-1.1a7.2 7.2 0 01-2.06.02c2.6-1 4.44-3.23 4.44-5.94 0-1.37-.47-2.62-1.27-3.64zM5.88 38.9C5.4 39.6 4.57 40 2.98 40c.45-.64.75-1.29.83-1.76C2.12 37.35 1 35.78 1 34c0-2.76 2.69-5 6-5s6 2.24 6 5-2.69 5-6 5c-.38 0-.76-.03-1.12-.09zM9 70a2 2 0 01-2-2h4a2 2 0 01-2 2zm4.85-6s1.16.8 1.7 1.6c.96 1.3.31 1.4-1.18 1.4H3.63c-1.5 0-2.14-.1-1.18-1.4.54-.8 1.7-1.6 1.7-1.6v-3c0-2.6 1.19-4.5 3.66-5 0 0 0-1 1.19-1s1.18 1 1.18 1c2.21.5 3.67 2.4 3.67 5v3zM9.65.3c-.4-.4-1-.4-1.3 0L1.2 7.25c-.4.4-.2.7.3.7L3 8v5c0 1 0 1 1 1h2.5a.5.5 0 00.5-.5V10a2 2 0 014 0v3.5a.49.49 0 00.5.5H14c1 0 1 0 1-1V8l1.58-.06c.4-.1.6-.4.2-.7L9.65.3zM5 937H2a1 1 0 01-1-1v-9h2v6.5c0 .27.22.5.5.5H4v-10a1.01 1.01 0 011-1h10a1 1 0 011 1v11.5c0 .83-.68 1.5-1.5 1.5H5zm2-10.51v3.02c0 .28.22.49.5.49h5a.5.5 0 00.5-.49v-3.02a.49.49 0 00-.5-.49h-5a.5.5 0 00-.5.49zm0 5.01c0 .27.22.5.5.5h5a.5.5 0 000-1h-5a.5.5 0 00-.5.5zm0 2c0 .27.22.5.49.5h3.02a.5.5 0 00.49-.5.5.5 0 00-.49-.5H7.49a.5.5 0 00-.49.5zM5 953a4 4 0 118 0h.72c.44 0 .6.05.77.13.16.1.29.22.38.38.08.17.13.33.13.77v8.44c0 .44-.05.6-.13.77a.9.9 0 01-.38.38c-.17.08-.33.13-.77.13H4.28c-.44 0-.6-.05-.77-.13a.9.9 0 01-.38-.38c-.08-.16-.13-.33-.13-.77v-8.44c0-.44.05-.6.13-.77a.9.9 0 01.38-.38c.17-.08.33-.13.77-.13H5zm1.25 0h5.5a2.75 2.75 0 00-5.5 0zm1.66 20.64a4.12 4.12 0 012.18 0l.81-1.09a.75.75 0 111.2.9l-.7.94c.57.59.93 1.45 1.1 2.61h-7a4.54 4.54 0 011.1-2.6l-.7-.95a.75.75 0 111.2-.9l.81 1.09zm-3.6 5.33c.05-.33.11-.66.19-.97h9c.08.31.14.64.19.97l.53-.35a.25.25 0 00.11-.17l.43-2.57a.75.75 0 111.48.24l-.43 2.58c-.08.47-.35.9-.75 1.16l-1.26.84a13.2 13.2 0 01-.27 2.6l1.68 1.4c.3.25.52.6.6 1l.43 2.15a.75.75 0 11-1.47.3l-.44-2.16a.25.25 0 00-.08-.14l-1.17-.97c-.76 2.06-2.12 3.62-4.08 3.62s-3.32-1.56-4.08-3.62l-1.17.97a.25.25 0 00-.08.14l-.43 2.16a.75.75 0 11-1.48-.3l.43-2.15a1.75 1.75 0 01.6-1l1.68-1.4a13.2 13.2 0 01-.27-2.6l-1.26-.84a1.75 1.75 0 01-.75-1.16l-.43-2.58a.75.75 0 111.48-.24l.43 2.57a.25.25 0 00.1.17l.54.35zm-.97 35.69a8 8 0 1111.32-11.32 8 8 0 01-11.32 11.32zm7.43-3.9a2.5 2.5 0 110-3.52.86.86 0 001.05.14.68.68 0 00.18-1.02 2.79 2.79 0 00-.17-.19 4 4 0 100 5.66l.16-.19a.68.68 0 00-.18-1.01.86.86 0 00-1.04.13zM9 1045a8 8 0 110-16 8 8 0 010 16zm-5.79 16.02h.07l5.17 2.1c.13.05.27.1.42.13.09.02.18.02.28 0 .14-.03.28-.08.41-.13l5.16-2.1a.21.21 0 01.26.1.11.11 0 010 .09v6.83c.02.1.02.21 0 .31a.3.3 0 01-.12.17.72.72 0 01-.26.15l-5 2c-.13.06-.27.1-.42.13a.66.66 0 01-.27 0 2.24 2.24 0 01-.42-.12l-5-2a.72.72 0 01-.26-.16.39.39 0 01-.21-.14.81.81 0 010-.3v-6.85a.21.21 0 01.2-.22zm5.93-4c.15.02.29.07.42.13l5.26 2.09a.2.2 0 01.11.26.22.22 0 01-.1.12l-5.27 2.1c-.13.05-.27.1-.42.12a.66.66 0 01-.28 0 1.86 1.86 0 01-.41-.12l-5.26-2.1a.2.2 0 01-.11-.25.22.22 0 01.1-.12l5.27-2.1c.13-.06.27-.1.42-.13a.66.66 0 01.28 0zM9.5 1040a.5.5 0 000-1H8v-1h1.5c1.75 0 3-1 3-2.5s-1.27-2.49-3-2.49h-2a.5.5 0 00-.5.5v3.49h-.5a.5.5 0 00-.5.49c0 .27.22.5.5.5l.5.01v1.01h-.5a.5.5 0 00-.5.49c0 .28.22.5.5.5l.5.01v.49a.5.5 0 00.5.5.5.5 0 00.5-.51v-.49h1.5zm-1.5-6h1.5c1.5 0 2 .75 2 1.5s-.5 1.5-2 1.5H8v-3zm6.66-668.66a8 8 0 11-11.32 11.32 8 8 0 0111.32-11.32zm-8.13 8.13a3.5 3.5 0 104.95-4.95 3.5 3.5 0 00-4.95 4.95zm6.92-.07l1.5.8a6.76 6.76 0 000-6.4l-1.5.8c.81 1.5.81 3.3 0 4.8zm-1.25-8.34a6.76 6.76 0 00-6.4 0l.8 1.48a5.06 5.06 0 014.8 0l.8-1.48zm-9.14 2.74a6.76 6.76 0 000 6.4l1.49-.8a5.06 5.06 0 010-4.8l-1.5-.8zm2.74 9.14a6.76 6.76 0 006.4 0l-.8-1.48c-1.5.8-3.3.8-4.8 0l-.8 1.48zM9 475a8.01 8.01 0 010 16 8 8 0 010-16zm6.82 8c0-3-1.95-5.56-4.65-6.47-.17.2-.3.4-.28.53.18 1.83 1.42.46 1.67.73.86.95-1.62 1.28-.76 3 .41.83.9 1.06 1.6 1.07.7.01.95 1.2 1 1.7.06.5 0 1.77-.26 2.32-.25.55.02 1.07.27 1.27a6.8 6.8 0 001.41-4.15zm-7.76-6.76a6.84 6.84 0 00-5.43 4.31c.5.06 1.71.07 1.86.5.16.42-.53.87-.53 1.76 0 .98 1.27.97 1.27 1.72 0 .74.27 1.6.27 1.85S6.55 488 6.95 488c.39 0 .08-1.53.1-1.93.01-.27.19-1.07.24-1.25.34-1.28 1.6-1.15 1.9-1.92.91-2.43-1.96-2.57-2.35-2.7a2.69 2.69 0 00-1.3-.07c-.26.09-.76-.34-.76-.7 0-.35 1-1.06 1.3-1.56.31-.5.56-.42 1.13-.94.26-.24.69-.37.85-.69zm-1.2 13.24a6.8 6.8 0 005.9-.8c-.3-.54-1.41-.61-1.98-.57-.67.06-1.43.49-1.85.58-.48.1-.83.26-1.25.27-.37.02-.42.3-.83.52z' id='svg_3' fill='%23b0ccda'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important;
}
.ui_scroll_default_theme.ui_scroll_emoji_theme > .ui_scroll_overflow > .ui_scroll_shadow_bottom,
.ui_scroll_default_theme.ui_scroll_emoji_theme > .ui_scroll_overflow > .ui_scroll_shadow_top,
.emoji_tabs_l_sc,
.emoji_tabs_r_sc,
.emoji_cats_title_helper:after {
  background-image: none !important;
}
.ui_actions_menu_item.im-action:before {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAIHCAMAAACytmytAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAnZQTFRFAAAAsMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMza7T9deAAAANJ0Uk5TAGRG0q43//oXo33H/r4l0BUImP2CArIO++0DWIacOqvmQ1fxiqEinrUMtsJpMAHfokD1DaBiBBEfMvQqHMB29uI4VRh0Nr1+Exo54GP8fxCsPWaF8/lw5Ht8b3qJs79hI9Y12x6741kZEj+mUGUtWuxcNAX41+68PNUWUm3nPtTPnRQblkHRLIDTec4Hm0iDD7Hy7zHwHaQLCYfI68GErXd1c3GVaslbVt7GId3NktmQxYy0ky7MSSDpgXjaZ+VCRakKxCevqI9E4Zmfmqdg6LozWazd0AAAB6dJREFUeJztmvlDlEUYx4fQx9BdRfEAogNJXdQWObREDTRbNcRzN5AlFRVYXPEmdNMWMwyQFCXNTS0rjTAFzfLAPIrKKyz/o2bm3Xd3TqWDJY3nhz2+n3eeZ+Z55p2deQGhSFrUUxoQ3U+t94cBTytBDMBASRxkgaBZrBwYPMQE1li+ydBhVI4bPkLyRtuMlEOPiicgIVECz0Bc0rMAz0ng+ReSERqd8qIExtDejB0nB4mM9dWDt7569NWDtb568NaL9bDaUslbqs0qgPEwAZPUCWATAJYmpNIX0RcRVTolSl0LdK60wW1md8cLwDpeM8BIWF92I2ATX1Lr9rRJapAOGZlKkAUwWRKnvPzK1GyAQdOmj+IWhxkQNstwBmTGhPQBr9o5X5NzDD13phhlluHnNSn8bKPF6xJw4MUHL0FzRH1uPMyY90YeDBHB/PwFeLFauAgGC2DBYuN9ySwpSGRsqXOpGrjApQY4Iz0IlrqY2rqYvjmBNWc3WkSiu4Zpc6XNbqTszQJpklIrBChQ6cvwGIs0ursH9YEaHRWr9fluVKy8/i21G4SWj1yhBpGxlSVkepasFPVVq42Ju3oVq64pZSa1q3RNCJQSoazc4ykvI59KQ4BcX1ax1utdW0FIeD6Sy8rT8bbMsrYc2BlMvni85NXr6T7QumKCh4GL7264V6Xc3cyMQzvyf9cq1s2pXK/QN2yEfICshaK+Caybt8xzb60S9sJz3662R3kr7duc230ceAem7oCdMMz+braf2/AuyJ+yvAYthV0j0jOi32NAFOx+f2s6WgAxibU5e+aGwQeWuor6jHTUAGNQcs7exjD50FUbS0iRA6F9lv1h0BSdvY0SYgfqmSi+qoP9Y/3Za8nnrDy2Y/NWN3/k82fjffLYQzHcWA6nfYx80XH9slISdvPDP3IEocAn/rRJgt6rZq886nQerbSLusdhzCqHR7jeYU5RB9+mEk9q8o4ndSUHjkK58aEcjnLACUHfHvYXigfHdK6O64LzC1e4uy5hIOYAXeAXzlgkJceOr/D4JRI0nx+8SoB83g1q0HO2YYcG7IA6PJZPq2RSB3WBzwDkIyQmuTglU0Q51YeJAhwHaKBEPFzGYe0EIWIMAuBz0gMB0EMqzJZJVgolXyjaJG7bi8mXmEg5SLXR7u6Qy5F4UjlyYqccaj0SpiwUNk2hkO8rmvaWw5yaOv3rVqNQp9mljxTKsET0zSF2lxVnAhxj0hkNOLGVAflhVyiGbREsFAnOxzALBVvQoLONiDdaqC3iOGijk/K8ClrvFOqhd1rLwRR/22YBZJ7BhN45Xu5H8jDZ39Qhz5JmgHZm5KnRAPm7yDyfidNcEj7dnsPXH0DnCSH5aguBjfjbt6iZeFuCPyaEQBv+dgEtonFwD86FY+DY+f0b54/eTwhbj8PtAM1LPL75OZiMYvu70BvaZYj34OY2f0rz2e++V9yDZnYiviQSS2CTwYimJXQPPDSAukHY1eMNTpv6RRRxG1gQPFcVFfCPTQuCJxy3eCQrAkrwUU08khHJja+HQjFKoTE+Safu1UcpHXAbriTiNoMLJNhdt9Rd7QDn6FISAbuUG54lackMYHTIu8wAnY44XdmC6Hk8uHLF1IEDVy5jxdBFgC7PMHQeGL2hugBMPzKAvPQ86Q4BzjQpgVxNEnP3oYhbZkeN01nTIT1RrE0DS3u7BdJqBd3iamjCp6MGl4UjmWmu4PF7lSuN9dYBV82PDdDBgBpLk/mxyVLDAGc7QvRIvxqhdqcG/HCwO6468E5UGVzbXTLAq6oB6lOiT2Kk7Nr1G0r9FMBNjX6qJ/VrGh1dhx+Vur6FNkYPkJuavmmy2+NmMxcG8c8soRXjggQ0rroB3D9pAGyfJgKzZxnrugu0rh4RvPvj0OTKpstVRExbwhD4BxULmZE9BTDyzQG2Qt0DWlePCP5Xx6FNSe+WEFtspy30yul+6DRfBd0fG3z9m7qtM1Z9fSf+QpSfYwU/5CvR91RVCf4xwYqPvvId9XWSML76TvUjrQgYTaqcWSOpcmaNZMgZVOs4ierrO41U/SJmKpiqX+VMGanqzUz9B7ZqxTWKrRq2W1Cs2KrVFN+CW0ixVSsGqiu2am63HPzJ2qqpLbjClV3SAChTtSKTVbW6kumuAvQ2UADj9pBB8LaRgHk7iaDCvM1swkJdqXtm3lRZodT/D5ZZeDEl5WKhNBNv34HWu3db4U4yr0dZ4F4jQkPvgSWK1WvjobXR3tJib2yFeHa+lwDcRS0ALeguQIkS/MYDrSszeKMYXN9d/QCfdGvrCqhBF1QHpu1UpCSwB84GFiuSOBHf4NUBuea3LZDrgPOYCIWqBxgXiMbelDW/D7jN4hzun2tu0Jrfj8Zxkp3pbBCj5gEH9ib8lYzWfFwuwHJxpKTmv/+xzApd6hQEutrU4PGyTRo9ID0JD1qS9IyczpJAElnceUJmycLgoyUuTqAaE/owKklIu0mS5A5ZwYGJPCExIHFkvRqsVjLnRCPdonFEYAyk+gmu+EM2XtTkjZd5YBE3XkRbv5624TdeYcBvvICxGgYY/8p16RJ9c0rgwQP6dlByFQSsqw4W8BuvcAxx46UeoD4lPbrx+hPCjZZnA+SsDQAAAABJRU5ErkJggg==') !important;
}
.im-page .im-page--center-empty {
  background-image: url(https://vk.com/images/icons/first_comment.png) !important;
}
.media_selector .ms_item:before {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAGdCAMAAAAln6ObAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAhNQTFRFAAAAsMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMzasMza8nTbZQAAALF0Uk5TAAmI1/C1OyCR0MB9CNP/9nHr1AqG8vHJwmBTrpYFsZsBmASrqJMD5oAuefkHSf2++sMQRiwCYyXFKXTKDOrfambilXymio7nbRVnCyLazzLo87sNXaN4lP5rOLj3Ud2NKMcXtNYv75Ac9T087HPbIfRHhUCLWe6/+838sGgjgzehtviz4MRkfxLL2TM6ROFLmkqZ0ldwuqnYzDGcXg+n5YlM4xMYoH6BetEbUCdUpEIeBAzcfgAABe9JREFUeJzd2ftD00YcAPBDW0GELygMnYotbFK1UOqjMjdwQzr3kFVndVbHZK08qoIWUGQoihsKWPGtU7YBOjfcpnN/4u6SXO57l3PiXrZ+f0iaD5d75XK5EEJy5s13uReQ3LyF+YsKiBk5hUCjqHgx2y0pMbEUcMwzcYmE8018TcIyE5dKuMzE1yVcbhW/AtlKy0j5Kts8XmIrT1shjJDKN8xzsVF9k9pqokRVnm+Nai8aawvBke06PyhYXbOQ1Yof5i4LiGZyrMX9wTE4Z9SenrteUxCNQghs2LhUQQ/AJhIqLpJwM8Bmuqt7C+MWgLcdPeH1vZPrQGfUVzRsfZe8N79xW73AbawqxiirENhg17xBYKONWwU22VgssCrMx5EXFR/yGPa+Uvft1BY56tr0wYdzaNFfxkcf73BY8ycQKVBs5y5agxrZNn5KbXdUsj3s4u8tl+wz1qJ5XkyhfZRi++X89hz4HFq+UAret3PHwQVqDSO7W790VPsfhjueoNtE/BDGOLQlSKIN4hjpcVt7G/uLojHVCGmPQaxdMV1KbZ7a0rX1zIRo6jCGbkcnsuRha5AH1lpy5CCeCODgUYamdXm6PV3Gr2MMjV/5RmPzjSw4diWO16Zqjye6oEegx5hhatksIbCbpOg2RboxalOKPBFqS8f1DIjKizj2zGZmT/T6rcYS4u/l6Acbwc9RauZzUJz+PHyZeWqbqe2QDI7KvhN5smw4Ge6ncy6W7lMDYhhb8RXvjkGE8CwsO31mCAYwBs4eqWT7IMYWa++fE54bPg9fK9jDatrChaWgB9+wKoxYxlPkMWyykKcoaS28cJGfLaXgIaXI6Oj1G5eiaB1G06AT8IqRD+xRrPZoXwPrVKTr6c4iFaWb4yWjX5gYNqW2ZsWt6Yix7eNl460bJDvqMxrkw8+NMWZslPtQWroyvJQOXR4B2C5wHOAI3U0AjAukC2e2pI0CHBZ4BWCC7q6K+4jGNXo0Eb1Oi7shcIgv64NDqE55FuKHPim5adjNHKlJdS5qHXVK4ycGYGBC7RFy0nfLYZkbTYW3VQrRPrypWNWwc94pZ++DFbJVs1lr2CtZyR1q31ZJFmULk1XyWpu03wW4U43lwNnuRMG9fOlinIkBLG7OrcdWydZKMCxnN2lcybiMnQZ+J51svu0G10oJt8Sp9S8nSrR/3/ODatkfbtAsyUF6W30uusHtRDX5nNDISUVx/LfQyPMQ26j1zJKYnJr2T09NYqocNee14Ci6uUZhcCZdn54ZhFFxbnCwj9TRB2nfYNDOYQpmCLnPOmgGpjhOQ9rCNExz9LPJ9z5MVdEJ2C+lJEMPWnFKI0+qSZynUToLXLq2nvoWaduezdGre+hrlwfPWl0oP/7/lH0O1KZ04iu4CtoUT634kTx0p+6lBS45v7nBQ35y/bz+rsBUDSntyCk7QW6lBM76Vq6CYgjndeHn6+Sj81d+ueJ+hP4BEw+y8Bpb+6lmda/cy1rUB0r5r2GtjbWopHIa5ibDIxn2+cJJ2X7td9244eqXNexqJqTZFZZw+hrbXptGNPe7I1uwX1g/eRWiF89LfA7yj4kEY3y2AtD0yAsgLlWLxxx4Wgw7USVI3ebPyFJUefza40wp4nTSQZkfa5wjEas2rZzDuAaLNSkvD2rwED3uWKlgGUCsh5WGrDIAsMKoA07ZaL7ZEunD2Gr2ZUiN5GJwvHjQR8KlU04kod/U19LsiBrjc5P5geUB/zrTaPX5/hhTC3nXFlyQbi5jF10PTtwLsKv4sIxJOlM9JkfLJLwO8ITu0hI+BpcX1dPK8/eWEvQvWetH1dmLTpR/a1F8aaPRKHWIZT3aPsvoiM5GUqnIrPRN7emI2Z6Rp8hivJUxW6MsXaj6jye0D0Z4DrPGlQ00jLLF5qyFEQPpxYzSfcTCFE95GdgnE4EhUvBw+QhCfroREVRQiN5JBvKCzCpZ1bcbpau8vpn6DsmOqHkghqJ9byLD9+Z14z9w5tZGdfuf4VW7XMdjd+54FVde20y1Q/4EU0GDeuX6MnYAAAAASUVORK5CYII=') !important;
}
.media_selector .ms_item.ms_item_article:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Crect id='backgroundrect' width='100%25' height='100%25' x='0' y='0' fill='none' stroke='none'/%3E%3Cg class='currentLayer' style=''%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath d='m0 0h24v24h-24z' id='svg_2' class='' opacity='0'/%3E%3Cpath d='m8 6v7c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-7h-2c-.55228475 0-1-.44771525-1-1 0-.55228475.44771525-1 1-1h6c.5522847 0 1 .44771525 1 1 0 .55228475-.4477153 1-1 1zm4 6h8c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-8c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1zm2-5h6c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-6c-.5522847 0-1-.44771525-1-1s.4477153-1 1-1zm-8 10h14c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1z' fill='%23b0ccda' id='svg_3' class='selected' fill-opacity='1'/%3E%3C/g%3E%3C/svg%3E") !important;
}
.audio_page_player2 .audio_page_player_status.audio_page_player_btn_enabled .btn_icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style=''%3E%3Crect id='backgroundrect' width='100%25' height='100%25' x='0' y='0' fill='none' stroke='none'/%3E%3Cg class='currentLayer' style=''%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath fill='%23e82f94' fill-rule='nonzero' d='M8.557 16.819a.9.9 0 1 0 1.084-1.438c-1.176-.886-1.841-2.099-1.841-3.38 0-1.283.665-2.496 1.841-3.382A.9.9 0 0 0 8.558 7.18C6.95 8.393 6 10.125 6 12.001c0 1.874.949 3.606 2.557 4.818zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3.443 2.819C17.05 15.607 18 13.875 18 12s-.95-3.607-2.559-4.819a.9.9 0 1 0-1.083 1.438c1.177.886 1.842 2.1 1.842 3.381 0 1.282-.665 2.495-1.84 3.381a.9.9 0 1 0 1.083 1.438zm4.183 1.87C21.137 16.943 22 14.554 22 12.009c0-2.53-.853-4.907-2.349-6.65l-.017-.021-.024-.028a.9.9 0 1 0-1.36 1.18l.022.025.013.015c1.211 1.413 1.915 3.373 1.915 5.48 0 2.117-.712 4.087-1.935 5.501a.9.9 0 0 0 1.361 1.178zm-15.252 0a.9.9 0 0 0 1.36-1.178C4.513 16.097 3.8 14.127 3.8 12.01c0-2.106.704-4.066 1.915-5.479l.013-.015.022-.025a.9.9 0 0 0-1.36-1.18l-.024.028-.017.02C2.853 7.102 2 9.478 2 12.01c0 2.545.863 4.934 2.374 6.68z' id='svg_1' class='selected' fill-opacity='1'/%3E%3C/g%3E%3C/svg%3E") !important;
}
.audio_page_player2 .audio_page_player_next .icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='10'%3E%3Crect id='backgroundrect' width='100%25' height='100%25' x='0' y='0' fill='none' stroke='none'/%3E%3Cg class='currentLayer' style=''%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath fill='%23e82f94' fill-rule='evenodd' d='M7 4.709V.596C7 .266 7.278 0 7.6 0h.8c.331 0 .6.267.6.596v8.808a.604.604 0 0 1-.6.596h-.8a.598.598 0 0 1-.6-.596V5.291a.653.653 0 0 1-.123.114L.81 9.803c-.447.324-.81.138-.81-.408V.604c0-.55.359-.735.81-.408l6.067 4.398A.65.65 0 0 1 7 4.71z' id='svg_1' class='selected' fill-opacity='1'/%3E%3C/g%3E%3C/svg%3E") !important;
}
.audio_page_player2 .audio_page_player_prev .icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='10'%3E%3Crect id='backgroundrect' width='100%25' height='100%25' x='0' y='0' fill='none' stroke='none'/%3E%3Cg class='currentLayer' style=''%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath fill='%23e82f94' fill-rule='evenodd' d='M2 4.709V.596A.604.604 0 0 0 1.4 0H.6C.27 0 0 .267 0 .596v8.808c0 .33.278.596.6.596h.8c.331 0 .6-.267.6-.596V5.291c.033.04.074.079.123.114L8.19 9.803c.447.324.81.138.81-.408V.604c0-.55-.359-.735-.81-.408L2.123 4.594A.65.65 0 0 0 2 4.71z' id='svg_1' class='' fill-opacity='1'/%3E%3C/g%3E%3C/svg%3E") !important;
}
.audio_page__shuffle_all .audio_page__shuffle_all_button:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg' width='24' height='24' style=''%3E%3Cg class='layer'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath d='m16,7c-2.94,0 -4.4,2.3 -5.87,4.25c-1.3,1.7 -2.38,3.7 -4.13,3.75l-3,0l0,2l3,0c2.93,0 4.24,-2.6 5.7,-4.53c1.3,-1.74 2.46,-3.47 4.3,-3.47l1,0l0,-2l-1,0zm-6.06,1.84c-0.52,-0.46 -1.38,-1.1 -2.04,-1.38c-0.64,-0.3 -1.4,-0.46 -2.23,-0.46l-2.67,0l0,2l3,0c0.44,0 0.8,0.08 1.14,0.22c0.45,0.2 1.14,0.7 1.58,1.1l1.23,-1.48l-0.01,0zm6.06,6.16l1,0l0,2l-1,0c-1.77,0 -3.24,-1.08 -4.32,-2.15l1.23,-1.5c0.8,0.83 1.98,1.65 3.1,1.65l-0.01,0zm1,4l0,-6l4,3l-4,3zm0,-8l0,-6l4,3l-4,3z' fill='%23e82f94' fill-rule='evenodd' id='svg_1'/%3E%3C/g%3E%3C/svg%3E") !important;
}
.audio_page_player2 .audio_page_player_shuffle.audio_page_player_btn_enabled .btn_icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cg class='layer'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath d='m18,8.9l-3.5,0c-1.014,0 -1.896,0.9 -3.758,3.61c-2.263,3.29 -3.34,4.39 -5.242,4.39l-2.5,0a0.9,0.9 0 0 1 0,-1.8l2.5,0c1.014,0 1.896,-0.9 3.758,-3.61c2.263,-3.29 3.34,-4.39 5.242,-4.39l3.5,0l0,-1.589a0.502,0.502 0 0 1 0.824,-0.386l2.996,2.491a0.503,0.503 0 0 1 0,0.773l-2.996,2.492a0.503,0.503 0 0 1 -0.824,-0.387l0,-1.594zm-5.966,4.377c1.046,1.336 1.72,1.823 2.466,1.823l3.5,0l0,-1.589a0.502,0.502 0 0 1 0.824,-0.386l2.996,2.491a0.503,0.503 0 0 1 0,0.773l-2.996,2.492a0.503,0.503 0 0 1 -0.824,-0.387l0,-1.594l-3.5,0c-1.36,0 -2.299,-0.562 -3.55,-2.086a58.818,58.818 0 0 0 1.084,-1.537zm-2.984,-4.091a58.818,58.818 0 0 0 -1.084,1.537c-1.046,-1.336 -1.72,-1.823 -2.466,-1.823l-2.5,0a0.9,0.9 0 1 1 0,-1.8l2.5,0c1.36,0 2.299,0.562 3.55,2.086z' fill='%23e82f94' id='svg_1'/%3E%3C/g%3E%3C/svg%3E") !important;
}
.audio_numeric .audio_row .audio_row__cover_icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cg class='layer'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath d='m8.3,17.65c-0.4,0.3 -0.8,0.1 -0.8,-0.5l0,-10.8c0,-0.6 0.4,-0.8 0.8,-0.4l8,5.4c0.3,0.2 0.3,0.6 0,0.8l-8,5.5z' fill='%23e82f94' id='svg_3'/%3E%3C/g%3E%3C/svg%3E") !important;
}
.audio_pl_snippet2 .audio_shuffle_all_button:before,
.ActionButton--shuffle:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cg class='layer'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath d='m16.25,6.5c-2.94,0 -4.4,2.3 -5.87,4.25c-1.3,1.7 -2.38,3.7 -4.13,3.75l-3,0l0,2l3,0c2.93,0 4.24,-2.6 5.7,-4.53c1.3,-1.74 2.46,-3.47 4.3,-3.47l1,0l0,-2l-1,0zm-6.06,1.84c-0.52,-0.46 -1.38,-1.1 -2.04,-1.38c-0.64,-0.3 -1.4,-0.46 -2.23,-0.46l-2.67,0l0,2l3,0c0.44,0 0.8,0.08 1.14,0.22c0.45,0.2 1.14,0.7 1.58,1.1l1.23,-1.48l-0.01,0zm6.06,6.16l1,0l0,2l-1,0c-1.77,0 -3.24,-1.08 -4.32,-2.15l1.23,-1.5c0.8,0.83 1.98,1.65 3.1,1.65l-0.01,0zm1,4l0,-6l4,3l-4,3zm0,-8l0,-6l4,3l-4,3z' fill='%23e82f94' fill-rule='evenodd' id='svg_1'/%3E%3C/g%3E%3C/svg%3E") !important;
}
.audio_pl_snippet2 .audio_pl_snippet__action_btn_listen:before,
.audio_row .audio_row__play_btn {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cg class='layer'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Ccircle cx='12' cy='12' fill='%23e82f94' id='svg_2' r='12'/%3E%3Cpath d='m9.846,16.86c-0.467,0.303 -0.846,0.097 -0.846,-0.45l0,-8.822c0,-0.551 0.38,-0.752 0.846,-0.45l6.91,4.48c0.324,0.21 0.327,0.549 0,0.761l-6.91,4.48l0,0.001z' fill='%23FFF' id='svg_3'/%3E%3C/g%3E%3C/svg%3E") !important;
}
.audio_page_player2 .audio_page_player_repeat.audio_page_player_btn_enabled .btn_icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Слой_1' x='0px' y='0px' viewBox='0 0 24 24' style='enable-background:new 0 0 24 24;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23E82F94;%7D .st1%7Bfill:none;stroke:%23E82F94;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;%7D%0A%3C/style%3E%3Cpath class='st0' d='M15.8,4.1l3,2.5C19,6.8,19,7.1,18.9,7.3c0,0,0,0-0.1,0.1l-3,2.5c-0.2,0.2-0.5,0.1-0.7-0.1C15,9.7,15,9.6,15,9.5 v-5C15,4.2,15.2,4,15.5,4C15.6,4,15.7,4,15.8,4.1z M8.2,14.1l-3,2.5C5,16.8,5,17.1,5.1,17.3c0,0,0,0,0.1,0.1l3,2.5 c0.2,0.2,0.5,0.1,0.7-0.1C9,19.7,9,19.6,9,19.5v-5C9,14.2,8.8,14,8.5,14C8.4,14,8.3,14,8.2,14.1z'/%3E%3Cpath class='st1' d='M4,11c0-2.5,1.5-4,4-4h7.5 M21,13c0,2.5-1.5,4-4,4H8.5'/%3E%3C/svg%3E") !important;
}
.audio_page_player2 .audio_page_player_add .btn_icon,
.audio_page_player2 .audio_player_btn_added .btn_icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg' width='16' height='37'%3E%3Cg class='layer'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath d='m7,29l-5,0c-0.552,0 -1,0.448 -1,1s0.448,1 1,1l5,0l0,5c0,0.552 0.448,1 1,1s1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1s-0.448,-1 -1,-1l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1s-1,0.448 -1,1l0,5z' fill='%23828A99' fill-rule='nonzero' id='svg_3'/%3E%3Cpath d='m1,7l4,4l10,-10' fill='%23000000' fill-opacity='0' id='svg_6' stroke='%23e82f94' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E") !important;
}
.audio_page_player2 .audio_page_player_repeat.audio_page_player_btn_repeat_one .btn_icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Слой_1' x='0px' y='0px' viewBox='0 0 24 24' style='enable-background:new 0 0 24 24;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:none;%7D .st1%7Bfill:%23E82F94;%7D .st2%7Bfill:none;stroke:%23E82F94;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;%7D%0A%3C/style%3E%3Cpath class='st0' d='M0,0h24v24H0V0z'/%3E%3Cpath class='st1' d='M15.8,4.1l3,2.5C19,6.8,19,7.1,18.9,7.3c0,0,0,0-0.1,0.1l-3,2.5c-0.2,0.2-0.5,0.1-0.7-0.1C15,9.7,15,9.6,15,9.5 v-5C15,4.2,15.2,4,15.5,4C15.6,4,15.7,4,15.8,4.1z M8.2,14.1l-3,2.5C5,16.8,5,17.1,5.1,17.3c0,0,0,0,0.1,0.1l3,2.5 c0.2,0.2,0.5,0.1,0.7-0.1C9,19.7,9,19.6,9,19.5v-5C9,14.2,8.8,14,8.5,14C8.4,14,8.3,14,8.2,14.1z'/%3E%3Cpath class='st2' d='M4,11c0-2.5,1.5-4,4-4h7.5'/%3E%3Cpath class='st2' d='M21,13c0,2.5-1.5,4-4,4H8.5'/%3E%3Cpath class='st1' d='M13,9h-1l-2,1v1h1.5v4H12h1V9z'/%3E%3C/svg%3E") !important;
}
.checkbox.on:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Слой_1' x='0px' y='0px' viewBox='0 0 15 15' style='enable-background:new 0 0 15 15;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FF2B98;%7D .st1%7Bfill:none;stroke:%23FFFFFF;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M3,0h9c1.7,0,3,1.3,3,3v9c0,1.7-1.3,3-3,3H3c-1.7,0-3-1.3-3-3V3C0,1.3,1.3,0,3,0z'/%3E%3Cpath class='st1' d='M4,7.5L6.5,10L11,4.5'/%3E%3C/g%3E%3C/svg%3E") !important;
}
#page_header_cont .back,
.fc_tab_head,
.box_title_wrap,
.im-page_classic.im-page .im-page--header,
.im-page_classic .im-page--chat-header,
.im-page_classic.im-page .im-page--chat-body-wrap-inner,
.Input[readonly],
.post_suggest,
.search_row,
.search_sep,
.gift_tt_show_all,
.MassMentionWarning {
  border-color: #1a1a1a !important;
}
.audio_page_player.audio_page_player_fixed,
.audio_page_layout .audio_friends_list,
.audio_layer_container .audio_page_player,
.im-page .im-page--history-new-bar,
.box_body,
.fc_msgs_unread,
.pv_cont .narrow_column,
.box_body .im_stickers_store_wrap .ui_tabs,
.ap_layer .audio_pl_snippet .audio_pl_snippet__header_inner,
.audio_pl_snippet .audio_pl_snippet__header,
.photos_container .photos_row,
.box_controls,
.ts_cont_wrap,
.feedback_row_wrap.unread:not(.feedback_row_touched),
.pv_white_bg,
.pva_period_fixed,
.wk_history_tabs,
.ChatSettings__content,
.ChatSettingsInfo,
.List,
.ChatSettingsMembersWidget,
.Button--mobile,
.ChatSettingsInvitationLink,
.ChatSettingsResetInvitationLink__text,
.SubmitArea,
.audio_pl_snippet2 .audio_shuffle_all_button:hover,
.online:after,
.online.mobile:after,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--photo .online.mobile:after,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--photo .online.mobile:after,
.nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--photo .online.mobile:after,
.ActionsMenu__inner,
.ui_actions_menu,
.privacy_dropdown .header,
.privacy_dropdown,
.apps_footer,
#top_notify_wrap,
.bd_day_cell.holiday,
.bd_day_head,
.top_notify_count,
.top_nav_btn:hover .top_notify_count {
  border-color: #3b3f41 !important;
}
.nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_classic.nim-dialog_unread,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_hovered,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog:hover,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered + .im-search-results-head,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered + .nim-dialog,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected + .im-search-results-head,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected + .nim-dialog,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic + .im-search-results-head,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic + .nim-dialog,
.nim-dialog:not(.nim-dialog_deleted):hover + .im-search-results-head,
.nim-dialog:not(.nim-dialog_deleted):hover + .nim-dialog,
.nim-dialog .nim-dialog--content,
#side_bar .more_div,
.post_full_like_wrap,
#ads_left.ads_left_empty + .left_menu_nav_wrap,
.counts_module,
.wide_column .page_top,
.module,
.wall_module .reply ~ .reply .dld,
.wall_module .reply ~ .reply .reply_wrap,
.im-page .im-page--dialogs-footer,
.ui_tabs,
.pv_author_block,
.pv_comments,
.feed_new_posts,
.group_l_row,
.group_l_row:last-child,
.group_edit_row_sep,
.media_preview_has_medias,
.like_cont,
.page_status_editor .editor,
div.page_status_input,
.top_notify_header,
.friends_list_bl,
.article_ed_layer .article_ed_layer__publish_settings .article_ed_layer__publish_settings_header,
.settings_line,
.settings_privacy_row,
.settings_bl_row,
.settings_apps .apps_settings_row_wrap,
.settings_block_msg,
.settings_table_row,
.audio_pl_edit_box .ape_add_audios_btn,
.audio_pl_edit_box .ape_add_pl_audios_btn,
.audio_pl_edit_box .ape_header,
.fakeinput:focus,
div[contenteditable=true]:focus,
input.big_text:focus,
input.dark:focus,
input.search:focus,
input.text:focus,
textarea:focus,
.box_title_wrap.box_grey,
.docs_choose_rows .docs_item,
.audio_layer_container .audio_page__footer,
.eltt,
input.dark,
.pedit_separator,
.olist_botsh .box_controls,
.info_msg,
.feed_row ~ .feed_row .feedback_row,
.feed_row ~ .feed_row .feedback_sticky_row,
.feed_row ~ .feed_row_fb_hidden .feed_row:first-child .feedback_row,
.feedback_sticky_rows:not(:empty) + .feed_row .feedback_row,
.feedback_sticky_rows:not(:empty) + .feed_row .feedback_sticky_row,
.ts_search_sep,
.im-page-pinned,
.top_notify_cont .top_notify_header,
.tickets_post_field,
.tu_row,
.help_table_question,
.help_tile_alert,
.settings_history_table tr td,
.media_selector .ms_item.ms_item_article,
.audio_pl_snippet2 .audio_pl_snippet__header,
.owner_photo_additional,
.profile_info_block,
#submit_post_box:not(.shown):not(.own_field) .poster__open-btn-wrapper,
.poster__toolbar,
.apps_i_panel,
.apps_i_policy,
.article_layer .article_layer__content_footer,
.photos_edit_selection_header,
.page_actions_wrap,
.page_actions_inner,
.tickets_header,
.tickets_reply_row,
.tickets_post_form__panel,
.top_profile_sep,
#top_profile_menu,
#stats_cont h4,
.stats_head,
.piechart_table tr td,
.stats_time_info,
.feed_updates .wall_module .feed_row .post,
.photos_choose_bottom,
.deep_active.wl_post .replies .wl_replies_empty,
.deep_active.wl_post.wall_module .replies .wl_replies_empty,
.deep_active.wl_post.wall_module .wl_replies_block_wrap .wl_replies_empty,
.deep_active.wl_post .wl_replies_block_wrap .wl_replies_empty,
.deep_active .replies .reply_fakebox,
.deep_active.wall_module .replies .reply_fakebox,
.deep_active.wall_module .wl_replies_block_wrap .reply_fakebox,
.deep_active .wl_replies_block_wrap .reply_fakebox,
.deep_active .replies .replies_wrap_deep,
.deep_active.wall_module .replies .replies_wrap_deep,
.deep_active.wall_module .wl_replies_block_wrap .replies_wrap_deep,
.deep_active .wl_replies_block_wrap .replies_wrap_deep,
.im-page .im-page--mess-search,
.mv_actions_block,
.wall_module .reply_box,
.wall_module .reply_fakebox_wrap,
.mv_info_narrow_column,
.gifts_section_row,
.gifts_constr_steps_wrap,
.box_msg,
.box_msg_gray,
.disabled.selector_container table.selector_table,
.selector_container table.selector_table,
.result_list,
.poster__open-btn-wrapper,
.sticker_hints_tt,
.tt_default,
.tt_default_right,
.im-page--toolsw,
.im-page--chat-header-in,
.ms_items_more,
.Dropdown__in,
.audio_subscribe_promo,
.emoji_tt_wrap,
.video_choosebox_bottom,
.audio_feed_post,
.im-to-end:focus .im-to-end__button,
.im-to-end:hover .im-to-end__button,
.im-to-end__button,
.ChatSettingsMembersWidget__add:before,
.im_stickers_my_row ~ .im_stickers_my_row,
.ui_search_fltr,
.friends_cur_filters,
.idd_popup,
.audio_pl_edit_box .ape_cover,
.audio_pl_edit_box .ape_pl_item:hover,
.audio_pl_edit_box .ape_pl_item .ape_pl_item_inner,
.post_publish,
.page_actions_separator,
.market_item_footer_wrap,
.market_item_footer_info,
.market_comments_summary,
.app_widget_list_row,
.bookmark_footer,
.wke_controls,
.pages_header_info,
.pages_history_header_wrap,
#mv_pl_tt .mv_tt_add_playlist,
.TopMenu_block_1KqlS,
.Panel_block_2RPF-,
.MainStatus_button_1p4_4,
.Panel_footer_epjyB,
.Panel_header_2eRoj,
.CardListItem_card_1rJmF,
.NumbersInput_item_2-aQb,
.ListItem_block_27maC,
.Mailings_desktop .GroupPage__footer,
#apps_layer .apps_header_wrapper,
.post_actions_btns,
.wddi,
.wddi_over,
.wdd_list,
div.fc_clist_filter_wrap,
.flat_button.ui_load_more_btn,
.settings_block_footer,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic,
.nim-dialog:not(.nim-dialog_deleted):hover,
.im_msg_audiomsg .audio-msg-track:not(.audio-msg-player):hover,
.flat_button.ui_load_more_btn:hover,
.im-mess.im-mess_search:hover,
.olist_item_wrap:hover,
.feedback_row_clickable:not(.feedback_row_touched):hover,
.feed_row ~ .feed_row .feedback_row_clickable:not(.feedback_row_touched):hover,
.top_notify_show_all:hover,
#side_bar ol li .left_row:hover,
.fakeinput,
div[contenteditable=true],
input.big_text,
input.search,
input.text,
textarea,
.page_media_poll_wrap,
.ui_tabs.ui_tabs_box,
.im-mess .im-mess--post,
.feedback_row_answer,
.payments_money_transfer_amount_wrap,
.top_notify_show_all,
.im-mess.im-mess_light,
.audio_page_layout .audio_page_separator,
.audio_page_layout .has_friends_block .audio_page__rows_wrap,
input.BlockSearchInput,
#mail_box_editable,
.audio_pl_edit_box .ape_add_audios_btn:hover,
.audio_pl_edit_box .ape_add_pl_audios_btn:hover,
.docs_choose_rows .docs_item:hover,
.docs_choose_upload_area,
.docs_choose_upload_area:hover,
.button_gray button.hover,
.button_gray button:hover,
.flat_button.secondary.hover,
.flat_button.secondary:hover,
.pv_cont .pv_can_edit:hover,
em.ts_clist_hl,
.audio_w_covers .audio_row.ui_gridsorter_moveable .audio_row_content,
.bd_day_cell,
.bd_day_cell.left,
.bd_day_cell.today,
.msg,
.ListItem--active,
.ListItem--can-be-hovered.ListItem--selectable:hover,
.Tabs,
.ui_search_sugg_list,
.im-page .im-page--history-new-bar:after,
.im-page .im-page--history-new-bar:before,
.ListItem--border:before,
.replies_open,
.wr_header,
.wall_module .page_media_thumbed_link,
.button_gray button,
.flat_button.secondary,
.im_stickers_bl_wrap,
.ap_layer_wrap .ap_layer__content,
div.wdd,
div.wdd.wdd_focused,
.ui_search_new .ui_search_input_inner,
.ui_search_new.ui_search_dark .ui_search_input_inner,
.payments_money_transfer_comment,
.payments_money_transfer_amount,
.im_stickers_buy_header,
.im-page .im-page--top-date-bar,
.im-page_classic.im-page .im-page--dcontent,
.ui_grey_block,
.submit_post,
.im_stickers_store_wrap .ui_tabs,
.page_block_header,
.audio_page_player2.audio_page_player_fixed,
.audio_pl_snippet,
.ui_search,
#mv_publish,
.help_table_questions,
.docs_item,
.tickets_thank_you_form,
.CatalogSection__leftColumn,
.Select--opened .Select__control,
.Select__menu,
.im-navigation__button,
.wpost_post,
.poster__btns-wrapper,
.poster__toolbar-wrapper,
.AuthorPageHeader__create,
.article_layer .article_layer__content:before,
.audio_pl_attach_preview,
.bp_post,
.docs_choose_dropbox_wrap {
  border-color: #242424 !important;
}
.tt_default.tt_down:after,
.tt_default.tt_down:before,
.im-chat-input,
.ms_items_more_wrap.to_up .ms_items_more:before,
.ms_items_more_wrap.to_up .ms_items_more:after,
div.fc_tab_txt,
.feedback_row_wrap,
.feedback_row,
.feedback_sticky_row,
.deep_active .post_replies_header,
.deep_active.wall_module .post_replies_header,
.mention_tt_actions,
.emoji_tt_wrap.tt_down:before,
.emoji_tt_wrap.tt_down:after,
.ui_actions_menu_top .ui_actions_menu:after,
.eltt.eltt_top.eltt_arrow_size_normal > .eltt_arrow_back,
.eltt.eltt_top.eltt_arrow_size_normal > .eltt_arrow_back .eltt_arrow,
.friends_user_row,
.post_full_like_wrap,
.wl_replies_header,
.wall_module.wl_post .reply .reply_wrap,
.wall_module .wl_reply_form_fixed .reply_box,
.wall_module .wl_reply_form_fixed .reply_fakebox_wrap,
.wall_module .replies_list,
.Modal__footer,
.PhotoEditor__actions,
.PageFooterWrap,
.wide_column .topics_module .topic_row {
  border-top-color: #242424 !important;
}
.wall_module .published_by_quote,
.wall_module .published_sec_quote,
.im_fwd_log_wrap,
.im_wall_log_wrap,
.copy_quote {
  border-left-color: #242424 !important;
}
.border_1_right,
.tt_default.tt_left:after,
.tt_default.tt_left:before {
  border-right-color: #242424 !important;
}
.im-chat-input,
.ui_actions_menu:before,
.ui_actions_menu:after,
.tt_default.tt_up:before,
.notify_sources.tt_up:after,
.notify_sources.tt_up:before,
.Dropdown--b .Dropdown__in:after,
.Dropdown--b .Dropdown__in:before,
.eltt.eltt_bottom.eltt_arrow_size_normal > .eltt_arrow_back,
.eltt.eltt_bottom.eltt_arrow_size_normal > .eltt_arrow_back .eltt_arrow,
.border_1_right,
.ui_search_fltr:before,
.ui_search_fltr:after,
.ms_items_more_wrap.to_down .ms_items_more:before,
.ms_items_more_wrap.to_down .ms_items_more:after,
.emoji_tt_wrap.tt_up:before,
.emoji_tt_wrap.tt_up:after,
.tt_default.tt_up:after,
.im-page--dialogs-search .ui_search_input_block,
.olist_item_wrap,
.group_list_row,
.feedback_row_answer:after,
.feedback_row_answer:before,
#top_profile_menu:before,
#top_profile_menu:after,
.gifts_box_rows .post,
#top_notify_wrap:after,
#top_notify_wrap:before,
.post_suggest:after,
.post_suggest:before,
.Modal__header--blue,
.MultiSelect__search,
.fc_tab_notify,
.bt_header,
#apps_user_warning_cont,
.apps_options_bar,
.EditorTabs__header,
body.scrolled .PageNavigation_wrap,
.pay-card-layout_type_vk .secure-information {
  border-bottom-color: #242424 !important;
}
.ui_actions_menu_sep,
.emoji_tt_wrap.emoji_shop_over.tt_down:after,
.ui_actions_menu_top .ui_actions_menu:before,
.ui_rmenu_sep {
  border-top-color: #3b3f41 !important;
}
.ActionsMenu__inner:before,
.ActionsMenu__inner:after {
  border-bottom-color: #3b3f41 !important;
}
.fc_tab_pointer:before,
.fc_tab_pointer:after {
  border-left-color: #3b3f41 !important;
}
.anyClassName {
  border-right-color: #3b3f41 !important;
}
.story_feed_new_item.stories_feed_preview_item .stories_feed_preview_author .stories_feed_preview_authors_wrapper:after {
  border-color: #b0ccda !important;
}
#fc_ctabs_cont,
.fc_tab,
.Card,
.sticker_hints_arrow,
.im-page-pinned,
.footer_wrap,
.im-chat-input .im-chat-input--txt-wrap,
.module,
.wall_module .reply_fakebox,
.tabbed_box .summary_tabs,
#mv_pl_tt .mv_tt_private_only + .mv_tt_playlists,
.im-page--dialogs-search,
.im-page_classic.im-page .im-page--chat-input,
.ui_search_new.ui_search_btn_large .ui_search_button_search,
._audio_page_player_wrap.audio_page_player_wrap.page_block,
.ui_search_new.ui_search_field_empty .ui_search_button_search,
.photos_container_edit_grid .photos_photo_edit_row_desc_placeholder {
  border: none !important;
}
._audio_page_content_block .ui_tab_sel,
._audio_page_content_block .ui_tab_sel:hover,
._audio_page_content_block .ui_tabs .ui_tab_sel,
._audio_page_content_block .ui_tabs .ui_tab_sel:hover,
._audio_page_content_block .ui_tabs_box .ui_tab_sel,
._audio_page_content_block .ui_tabs_box .ui_tab_sel:hover {
  border-color: #e82f94 !important;
}
.fc_msgs {
  border-color: #2d2f30 !important;
}
.bt_report_row,
.group_tokens_row:last-child,
.groups_api_divider,
.groups_edit_event_log_controls {
  border-bottom: 1px solid #3b3f41 !important;
}
.group_apps_edit {
  border-top: 1px solid #3b3f41 !important;
}
.bt_tag_label,
.page_load_photo {
  color: #828282 !important;
}
body,
h2,
.ui_search_field,
.module_header .header_top,
.ui_tab_sel,
.ui_tabs .ui_tab_sel,
.ui_tabs_box .ui_tab_sel,
.nim-dialog .nim-dialog--preview,
.nim-dialog .nim-dialog--text-preview,
.im-mess-stack .im-mess-stack--content .im-mess-stack--pname > a,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--preview,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--text-preview,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--preview,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--text-preview,
.nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--preview,
.nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--text-preview,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--preview > b,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--preview > b,
.nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--preview > b,
.im-page .im-search-results-head,
.audio_page__shuffle_all .audio_page__shuffle_all_button,
.subheader,
h4.subheader,
.right_list_header,
a.wall_reply_greeting,
.im-fwd.im-fwd_msg .im-fwd--messages,
.mv_title,
.mv_recom_block_title,
.page_block_header,
.tabbed_box .summary_tab_sel .summary_tab3,
.box_title_wrap.box_grey .box_title,
.feedback_header,
.feedback_header b,
#payments_box,
ul.listing li span,
.audio_row .audio_row__lyrics .audio_row__lyrics_inner,
.top_notify_cont .feedback_header,
.feedback_content .feedback_text .wall_post_text,
.feedback_content .feedback_text .wall_reply_text,
.top_notify_header,
.friends_field,
.right_list_field,
.ui_tab,
.ui_tabs .ui_tab,
.audio_page_player .audio_page_player_title_performer,
.im_stickerpack_name,
.bd_header_info,
.bd_header_month,
.selector_container td.selector input.focused,
.selector_container td.selector input.selected,
.selector_input.selected,
.profile_warning_label,
.first > #stats_cont h4,
.first > .stats_head,
.tu_row_comment,
.tickets_reply_text,
.tickets_header,
.help_tile__title_a,
.settings_votes_income .settings_history_amount,
.audio_page_player2 .audio_page_player_title_song,
.im-replied--text,
.ChatSettingsInfo__title,
.wall_module.wl_post .page_media_caption,
.wall_module.wl_post .wall_post_text,
.wl_replies_header,
#payments_money_transfer_summary,
.audio_pl_snippet2 .audio_shuffle_all_button,
.owner_photo_additional,
.apps_access_item_info b,
.apps_options_bar .apps_options_bar_left .app_summary_name,
.flat_button,
.article,
.photos_edit_selection_header,
.help_table_questions__title,
.page_actions_item,
.page_actions_dd_label,
.page_actions_header_inner,
.top_profile_mrow,
#stats_cont h4,
.stats_head,
.graph_menu_item.graph_menu_item_sel,
.graph_menu_item.graph_menu_item_sel:hover,
.feed_updates .explain,
.feed_update_row .post_author,
.ui_gallery_wall_cards .wall_card__title_link,
.im-page .im-page--mess-search,
.result_list ul li.active,
.result_list ul li,
.summary_tab3,
input.dark,
.pedit_label,
.pedit_label_box,
.selector_container td.selector .token_inner,
.selector_container td.selector .token_prefix,
#pedit_result .msg_text,
.pedit_row_notice,
.AudioPlaylistSnippet .ActionButton--shuffle__text,
.ActionsMenu__item,
.ui_actions_menu_item,
.notify_sources_tt_content .line_cell .info,
.notify_sources_tt_content .line_cell,
.privacy_dropdown .item_sel,
.privacy_dropdown .item_sel_plus,
.privacy_dropdown .item,
.privacy_dropdown .header,
.privacy_dropdown .l_header .l_header_label,
.privacy_dropdown .l_item,
.privacy_dropdown .l_item_sel,
.page_media_event .page_media_event_name,
.Dropdown__in,
.audio_subscribe_promo__title,
.audio_subscribe_promo__text,
.page_name,
h1.page_name,
.top_notify_cont,
.audio_pl_snippet2 .audio_pl_snippet__description,
.audio_page_layout .audio_recoms_blocks .recoms_special_block_title,
.audio_page_layout .audio_section__recoms .recoms_special_block_title,
._audio_pl.audio_pl_top_audios .audio_row .audio_row__inner:before,
.Tabs__item--active > *,
.im_sticker_bl_name,
.im_stickers_my_tip,
.im_stickers_my_name,
.reply_submit_hint_opts .radiobtn,
.ui_search_fltr_label,
.ui_search_fltr,
.friends_cur_filters .token,
.ui_search_fltr b,
.idd_popup .idd_item,
.idd_popup .idd_header,
.idd_wrap .idd_selected_value,
.audio_pl_edit_box .ape_cover_title,
.gtop_complex_message .gtop_content .gtop_header,
.gtop_complex_message .gtop_content .gtop_message,
#apps_layer .apps_header .apps_name,
#group_section_menu .module_body .ui_gallery .ui_gallery_item .groups_menu_item .groups_menu_item_title,
#groups_menu_promo .apps_group_catalog_promo_header,
.app_widget_list_row,
.market_item_title,
.market_item_price,
.market_comments_summary,
.page_block_sub_header,
.microdata_price,
#mv_pl_tt .mv_tt_playlist,
.MainActions_itemText_1gXiE,
.MainServices_text_2jbbb,
.MainPromos_item_3RzR1,
.MainHead_block_2hP2d .MainHead_balanceTitle_dHcnD,
.MainServices_icon_black_1bdck,
.MainStatus_button_1p4_4,
.HistoryListItem_amount_rPK5B,
.Mailings_desktop .GroupPage__description,
.Button--secondary__29JKy,
.Card h1,
.Card__header,
.Input__label,
.im-aside-notice-promo.group-messages-notify-block .im-aside-notice--title,
.media_voting_question,
.media_voting_option_text,
.mott_text,
.verified_tt_text,
.tt_w .tt_text,
.ui_search_sugg_list,
.im-page .im-page--history-new-bar:after,
.im-page .im-page--history-new-bar:before,
.ListItem--border:before,
.replies_open,
.wr_header,
.wall_module .page_media_thumbed_link,
.button_gray button,
.flat_button.secondary,
.im_stickers_bl_wrap,
.ap_layer_wrap .ap_layer__content,
div.wdd,
div.wdd.wdd_focused,
.ui_search_new .ui_search_input_inner,
.ui_search_new.ui_search_dark .ui_search_input_inner,
.payments_money_transfer_comment,
.payments_money_transfer_amount,
.im_stickers_buy_header,
.im-page .im-page--top-date-bar,
.article > h1,
.wdd_text,
.profile_info_header,
.im-page .im-page--history-new-bar > span,
.photos_period_delimiter_fixed,
.tabbed_box .summary_tab_sel .summary_tab2,
.audio_pl_edit_box .ape_header,
.group_l_row,
.page_block,
.mv_info,
.fakeinput,
div[contenteditable=true],
input.big_text,
input.search,
input.text,
textarea,
.page_media_poll_wrap,
.ui_tabs.ui_tabs_box,
.profile_info_edit,
.box_title_wrap.box_grey,
.eltt,
input.text.ts_input:focus,
.im-page--back-btn:hover,
#mail_box_editable,
.audio_pl_snippet .audio_pl_snippet__info_title,
.im-page--title-main-inner,
.nim-dialog.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text,
.mention_tt_row,
.msg_text,
.audio_pl_edit_box .ape_add_pl_audios_btn,
.tt_default,
.tt_default_right,
.Input[readonly],
.PlaceholderSmall__title,
.PlaceholderSmall__text,
.Button--tertiary:not(.Button--disabled):focus,
.Button--tertiary:not(.Button--disabled):hover,
.im-chat-input--editing-head,
.feed_blog_reminder_large .feed_blog_reminder_text,
.im-page-pinned--media,
.top_profile_name,
.ts_wrap .input_back_content,
.events_card__title,
.groups_nearest_event__title,
.search_filter_main,
.search_filter_open,
.search_filter_shut,
.photos_container_edit_grid .photos_photo_edit_row_desc_placeholder,
.photos_album_intro h1,
.author_page_article_title,
.gift_tt_header,
.medadd_c_linkhead:not(.medadd_inline_editing) .medadd_inline_edit_target,
.AudioPlaylistSnippet h1.AudioPlaylistSnippet__title--main,
.verification_box .verification_title,
.audio_pl_edit_box .ape_add_audios_btn,
.audio_row .audio_row__position,
.mail_box_group_first_message,
.PeerProfile__content,
.app_widget_donation_data,
.medadd_h,
.audio_pl_attach_preview .audio_pl_attach_preview__title,
.eltt .eltt_fancy_action,
.TokenInput__input,
.fc_msg.wrapped,
.JobsPageHeader__subtitle,
.JobThumb__title,
.JobThumb__description,
.MassMentionWarning__title,
.payments_summary_header,
.secure-information__column_position_left,
.pay-card-layout__notification_type_vk .info-block_type_notification .info-block__column_type_right,
.pay-card-layout_type_vk .credit-card-form__label-group_type_add-card .credit-card-form__label,
.pay-card-layout_type_vk .credit-card-form__label-group_type_card-number .credit-card-form__input,
.pay-card-layout__notification_type_vk .info-block_type_sum .info-block__column_type_right,
.pay-card-layout__notification_type_vk .info-block_type_title .title,
.post_author_data_title,
.im-page--chat-input ._im_chat_input_w,
.im-audio-message_recording,
.verification_set_item_title,
.bt_product_row_subtitle,
.apps_group_catalog_promo_header,
.group_edit_label,
.wall_reasons_list,
.Input,
.Input--left,
.BlockSearchInput {
  color: #ffffff !important;
}
.rb_box_wrap,
.poster__view #poster-field-msg,
.article_snippet .article_snippet__read_btn,
.article_snippet .article_snippet__action_btn_text,
.profile_info_header .im-mess-stack--lnk,
.popup_box_container .im-mess-stack--lnk,
.audio_pl_edit_box .ape_audio_item_wrap .audio_row em {
  color: #000000 !important;
}
.audio_page_player_title_performer a,
.audio_pl_snippet2 .audio_pl_snippet__info_title,
.audio_row .audio_row__performers a,
.audio_pl_snippet_info_maintitle,
.audio_pl_snippet2 .audio_pl_snippet__action_btn_listen {
  color: #e82f94 !important;
}
.nim-dialog .nim-dialog--name .nim-dialog--name-w,
.audio_row .audio_row__performer,
.im-popular--name,
.im-page .nim-conversation-search-row .nim-dialog--name .nim-dialog--name-w,
.audio_page_layout .audio_item__title,
.audio_page_layout .audio_item__title > a,
.page_counter .count,
.profile_more_info_link,
.wall_module .media_desc .a,
.ui_tab_plain,
.fc_contact_name,
a,
.ui_rmenu_item,
.ui_rmenu_subitem,
.post_like,
.post_reply,
.post_share,
.fc_tab_notify,
.page_media_poll .page_poll_row_percent,
#side_bar ol li .left_row,
.stl_active.over_fast #stl_bg,
.wall_module .post_like:hover,
.wall_module .post_reply:hover,
.wall_module .post_share:hover,
.audio_row:hover:not(.audio_row__current) .audio_row_content,
.left_count_wrap,
.mail_box_cont,
#group_apps_list .group_apps_list_rows .group_apps_list_row .group_apps_edit,
.apps_i_panel,
.page_status_editor .editor,
.im-page-pinned,
.im-page .im-page--clear-recent,
.deep_active .post_replies_header .post_replies_reorder,
.deep_active.wall_module .post_replies_header .post_replies_reorder,
.ts_contact_name,
.ChatSettingsMembersWidget__add,
.im-fwd .im-fwd--title,
.Select__control,
.audio_pl_edit_box .ape_audio_item_wrap .ape_attach,
.page_counter:hover .label,
.im-page--title-reconnect,
.audio_row__more_actions .audio_row__more_action,
.im-replied--author-link,
.nim-dialog.nim-dialog_typing .nim-dialog--typing,
.tu_mem,
.language_box_row .language_box_row_label,
.Entity__title,
.Link,
.Button--tertiary,
.Select__menu .Select__group > .Select__title,
.Select__option,
.feed_blog_reminder_large .feed_blog_reminder_title,
.feed_blog_reminder_link,
#stl_text,
.mem_pseudolink,
.im-mess .im-mess--btn,
.post_suggest .post_suggest__action_text,
.wddi_text,
.friends_import_header,
.AuthorPageHeader__create,
.olist_item_name,
.ui_ownblock_label,
.page_photo.page_action_menu_groups .page_actions_item.group_send_msg_status_block .group_send_msg_status_block_title,
.audio_w_covers .audio_podcast .audio_row__title_inner,
a b,
b a,
.mail_link__title,
.sticker_extra_tt .tt_text .stickers_extra_text > b,
#app_widget_header_btn,
#qr_code_btn,
.app_actions_menu_wrap,
.wide_column .topics_module .topic_title,
.topics_module .topic_inner_link,
.payments_getvotes_method_title {
  color: #b0ccda !important;
}
`,
    'settings': `*::-webkit-scrollbar-track-piece {
  background: none !important;
}
*::-webkit-scrollbar {
  background-color: #242424 !important;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: #e7e8ec !important;
}
*::-webkit-scrollbar-thumb {
  background-color: #626568 !important;
}
*::-webkit-scrollbar-thumb {
  border-radius: 50px;
}
*::-webkit-scrollbar {
  width: 5px;
  max-height: 5px;
}
html,
body {
  transition-duration: 500ms !important;
  -o-transition-duration: 500ms !important;
  -moz-transition-duration: 500ms !important;
  -webkit-transition-duration: 500ms !important;
  transition-delay: 0ms !important;
  -o-transition-delay: 0ms !important;
  -moz-transition-delay: 0ms !important;
  -webkit-transition-delay: 0ms !important;
  transition-timing-function: ease-in-out !important;
  -o-transition-timing-function: ease-in-out !important;
  -moz-transition-timing-function: ease-in-out !important;
  -webkit-transition-timing-function: ease-in-out !important;
  transition-property: background-color, border-bottom-color, border-left-color, border-right-color, border-top-color !important;
  -o-transition-property: background-color, border-bottom-color, border-left-color, border-right-color, border-top-color !important;
  -moz-transition-property: background-color, border-bottom-color, border-left-color, border-right-color, border-top-color !important;
  -webkit-transition-property: background-color, border-bottom-color, border-left-color, border-right-color, border-top-color !important;
}
.vk-dark {
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, "Noto Sans Armenian", "Noto Sans Bengali", "Noto Sans Cherokee", "Noto Sans Devanagari", "Noto Sans Ethiopic", "Noto Sans Georgian", "Noto Sans Hebrew", "Noto Sans Kannada", "Noto Sans Khmer", "Noto Sans Lao", "Noto Sans Osmanya", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Thai", sans-serif;
  z-index: 99999999;
  color: #ffffff !important;
}
.vk-dark-main-container {
  max-height: 270px;
  overflow-y: auto;
}
.vk-dark-sittings-main-position {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: auto;
}
.vk-dark-settings-container {
  width: 550px;
  height: 380px;
  top: 50%;
  left: 50%;
  margin-top: -140px;
  margin-left: -275px;
  border-radius: 4px;
  overflow: hidden;
}
.vk-dark-main-header,
.vk-dark-settings-support {
  padding: 0 20px;
  height: 54px;
  line-height: 54px;
}
.vk-dark-main-header {
  font-size: 16px;
}
.vk-dark-row,
.vk-dark-main-header {
  border-bottom: 1px solid;
}
.vk-dark-settings-support {
  border-top: 1px solid;
  text-align: center;
}
.vk-dark-settings-support > a {
  text-decoration: none;
}
.vk-dark-settings-support > a:hover {
  text-decoration: underline;
}
.vk-dark-settings-group {
  margin: 0 20px;
}
.vk-dark-row {
  padding: 15px 0 14px;
}
.vk-dark-settings-group:last-child > .vk-dark-row {
  border: none;
}
.vk-dark-cell-left {
  width: 145px;
  padding: 6px 10px 6px 0;
  line-height: 16px;
}
.vk-dark-settings-narrow-row {
  margin-bottom: 10px;
}
.vk-dark-hidden-checkbox {
  width: 1px;
  height: 1px;
  opacity: 0;
}
.vk-dark-settings-narrow-row input[type=checkbox] + label.vk-dark-settings-label:before {
  display: block;
  content: "";
  background: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2215%22%20viewBox%3D%220%200%2015%2015%22%20width%3D%2215%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20fill%3D%22%23fff%22%20height%3D%2215%22%20rx%3D%223%22%20width%3D%2215%22%2F%3E%3Crect%20height%3D%2214%22%20rx%3D%223%22%20stroke%3D%22%23c1c9d1%22%20width%3D%2214%22%20x%3D%22.5%22%20y%3D%22.5%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E) no-repeat 0 !important;
  margin: 0 7px 0 0;
  width: 15px;
  height: 15px;
}
.vk-dark-settings-narrow-row input[type=checkbox]:checked + label:before {
  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2215%22%20height%3D%2215%22%20viewBox%3D%220%200%2015%2015%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20width%3D%2215%22%20height%3D%2215%22%20fill%3D%22%235181B8%22%20rx%3D%223%22%2F%3E%3Cpath%20stroke%3D%22%23FFF%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M4%207.5L6.5%2010%2011%204.5%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E) !important;
}
.vk-dark-close-settings {
  float: right;
  width: 24px;
  height: 24px;
  background: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20width%3D%2210%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m6.4%205%203.3-3.3c.4-.4.4-1%200-1.4s-1-.4-1.4%200l-3.3%203.3-3.3-3.3c-.4-.4-1-.4-1.4%200s-.4%201%200%201.4l3.3%203.3-3.3%203.3c-.4.4-.4%201%200%201.4.2.2.4.3.7.3s.5-.1.7-.3l3.3-3.3%203.3%203.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1%200-1.4z%22%20fill%3D%22%23828a99%22%2F%3E%3C%2Fsvg%3E) 50% no-repeat !important;
  border: 0;
  margin: 6px;
  cursor: pointer;
  opacity: .7;
  right: 4px;
  top: 8px;
}
.vk-dark-close-settings:hover {
  opacity: 1;
}
.vk-dark-main-header,
.vk-dark-settings-support,
.payments_box_wide {
  background-color: #3b3f41 !important;
}
.vk-dark-settings-container {
  background-color: #2d2f30 !important;
}
.vk-dark-sittings-main-position {
  background-color: rgba(0, 0, 0, 0.8) !important;
}
.vk-dark-row,
.vk-dark-main-header,
.vk-dark-settings-support {
  border-color: #1a1a1a !important;
}
.vk-dark-cell-left {
  color: #656565 !important;
}
.vk-dark-settings-support > a {
  color: #b0ccda !important;
}
.vk-dark-cell-left,
.vk-dark-settings-narrow-row input[type=checkbox] + label.vk-dark-settings-label:before {
  float: left;
}
.vk-dark-sittings-main-position,
.vk-dark-settings-container,
.vk-dark-close-settings {
  position: fixed;
}
`,
    'dialog-float': `/*
Изменяет расположение чата в новом дизайне
*/
.im-page_classic.im-page .im-page--chat-input,
.im-page .im-page--history {
  margin-left: 0 !important;
}
.im-page .im-page--history {
  margin-right: 317px;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.im-create.im-create_material {
  right: 0;
}
.im-page .im-page--dialogs {
  float: right !important;
}
`,
    'menu-promo': `#ads_left {
  display: none !important;
}
`,
    'audio-promo': `.audio_promo {
  display: none !important;
}
`,
    'audio-subscribe': `.CatalogBlock__subscription {
  display: none !important;
}
`,
    'dialog-friend_online': `/*
Убираем блок друзей онлайн права с низу
*/
.chat_onl_wrap {
  display: none !important;
}
`,
};
const styleStorage = {};
const storageName = `vk_dark`;
const defaultStorage = `{
    "vkdark-main": true,
    "menu-promo": true,
    "dialog-float": false,
    "dialog-friend_online": true,
    "audio-subscribe": true,
    "audio-promo": true,
    "disable-all_promo": false
}`;

// Работа с локальным хранилищем.
function getStorage(){
    return JSON.parse(localStorage.getItem(storageName));
}

function mutationStorageAfterSave(key, value, storage){
    switch (key) {
        case 'disable-all_promo':
            if(value) {
                storage['audio-subscribe'] = true;
                storage['audio-promo'] = true;
                storage['menu-promo'] = true;
            }
            break;
        case 'audio-subscribe':
        case 'audio-promo':
        case 'menu-promo':
            if(!value) {
                storage['disable-all_promo'] = false;
            }
            break;
    }
    return storage;
}

function setStorage(key, value) {
    let storage = getStorage();
    if(storage === null) {
        storage = JSON.parse(defaultStorage);
    }
    storage = mutationStorageAfterSave(key, value, storage);
    storage[key] = value;
    localStorage.setItem(storageName, JSON.stringify(storage));
    setStyles();
    setCheckbox();
}

if(getStorage() === null) {
    localStorage.setItem(storageName, defaultStorage);
}
function deleteAllStyles() {
    Object.keys(styleStorage).forEach(key => styleStorage[key].remove());
}

function setStyles() {
    //сначала удаляем стили.
    deleteAllStyles();
    const storage = getStorage();
    Object.keys(storage).forEach(key => {
        if(!!storage[key]) {
            styleStorage[key] = GM_addStyle(styles[key]);
        }
    });
}
//Получаем состояние чекбоксов из сторейжа и проставляешь их значения
function setCheckbox(){
    const storage = getStorage();
    Object.keys(storage).forEach(key => document.getElementById(key).checked = storage[key]);
}

GM_addStyle(styles['settings']);
setStyles();

GM_registerMenuCommand('Github.com', () => {
    GM_openInTab('https://github.com/Dmitiry1921/VK-Dark/blob/master/README.md', {active: true, insert: true});
});
GM_registerMenuCommand('Check Update', () => {
    GM_openInTab('https://github.com/Dmitiry1921/VK-Dark/raw/master/vkdark.user.js', {active: true, insert: true});
});
GM_registerMenuCommand('Настройки', () => {
    const elMain = '.vk-dark.vk-dark-sittings-main-position';
    if(document.querySelector(elMain) !== null) return;
    //Добавляем блок на страницу
    document.body.insertAdjacentHTML('beforeEnd', `<div class="vk-dark vk-dark-sittings-main-position"> <div class="vk-dark vk-dark-settings-container"> <h2 class="vk-dark vk-dark-main-header"> <div class="vk-dark-title">Настройки</div> <div class="vk-dark-close-settings"></div> </h2> <div class="vk-dark vk-dark-main-container"> <div class="vk-dark vk-dark-settings-group"> <div class="vk-dark vk-dark-row"> <div class="vk-dark vk-dark-cell-left">Основные</div> <div class="vk-dark vk-dark-cell-right"> <div class="vk-dark vk-dark-settings-narrow-row"> <input type="checkbox" id="vkdark-main" class="vk-dark vk-dark-hidden-checkbox" checked/> <label for="vkdark-main" class="vk-dark vk-dark-settings-label"> Включить VK-Dark </label> </div> </div> </div> </div> <div class="vk-dark vk-dark-settings-group"> <div class="vk-dark vk-dark-row"> <div class="vk-dark vk-dark-cell-left">Меню</div> <div class="vk-dark vk-dark-cell-right"> <div class="vk-dark vk-dark-settings-narrow-row"> <input type="checkbox" id="menu-promo" class="vk-dark vk-dark-hidden-checkbox" checked/> <label for="menu-promo" class="vk-dark vk-dark-settings-label"> Скрыть блок "Реклама" </label> </div> </div> </div> </div> <div class="vk-dark vk-dark-settings-group"> <div class="vk-dark vk-dark-row"> <div class="vk-dark vk-dark-cell-left">Диалоги</div> <div class="vk-dark vk-dark-cell-right"> <div class="vk-dark vk-dark-settings-narrow-row"> <input type="checkbox" id="dialog-float" class="vk-dark vk-dark-hidden-checkbox" /> <label for="dialog-float" class="vk-dark vk-dark-settings-label"> Расположить переписки справа </label> </div> <div class="vk-dark vk-dark-settings-narrow-row"> <input type="checkbox" id="dialog-friend_online" class="vk-dark vk-dark-hidden-checkbox" checked/> <label for="dialog-friend_online" class="vk-dark vk-dark-settings-label"> Скрыть блок чата с друзьями </label> </div> </div> </div> </div> <div class="vk-dark vk-dark-settings-group"> <div class="vk-dark vk-dark-row"> <div class="vk-dark vk-dark-cell-left">Аудиозаписи</div> <div class="vk-dark vk-dark-cell-right"> <div class="vk-dark vk-dark-settings-narrow-row"> <input type="checkbox" id="audio-subscribe" class="vk-dark vk-dark-hidden-checkbox" checked/> <label for="audio-subscribe" class="vk-dark vk-dark-settings-label"> Скрыть блок "Подписка на музыку" </label> </div> <div class="vk-dark vk-dark-settings-narrow-row"> <input type="checkbox" id="audio-promo" class="vk-dark vk-dark-hidden-checkbox" checked/> <label for="audio-promo" class="vk-dark vk-dark-settings-label"> Скрыть блок "Промо" </label> </div> </div> </div> </div> <div class="vk-dark vk-dark-settings-group"> <div class="vk-dark vk-dark-row"> <div class="vk-dark vk-dark-cell-left">Реклама</div> <div class="vk-dark vk-dark-cell-right"> <div class="vk-dark vk-dark-settings-narrow-row"> <input type="checkbox" id="disable-all_promo" class="vk-dark vk-dark-hidden-checkbox" /> <label for="disable-all_promo" class="vk-dark vk-dark-settings-label"> Отключить всю рекламу на сайте </label> </div> </div> </div> </div> </div> <div class="vk-dark vk-dark-settings-support"> Вы можете <a href="https://vk.me/join/AJQ1d7U5CANH4MRXOBNPuzB4">связаться с нами</a> </div> </div></div>`);
    const main = document.querySelector(elMain);
    //Закрытие настроек
    function close() {
        document.body.removeChild(main);
    }
    document.querySelector('.vk-dark-close-settings').onclick = close;
    //Клик мне поля закрывает окно.
    main.onclick = (e) => {if(main === e.target) close()}
    //Вешаем события onchange на пункты настроек
    document.querySelectorAll('.vk-dark-hidden-checkbox').forEach(element => element.onchange = (e) => setStorage(e.target.id, e.target.checked));
    setCheckbox();
});
GM_registerMenuCommand('Сообщить об ошибке', () => {
    GM_openInTab('https://vk.me/join/AJQ1d7U5CANH4MRXOBNPuzB4', {active: true, insert: true});
});

console.info('VK Dark version: ', '0.2.3');
