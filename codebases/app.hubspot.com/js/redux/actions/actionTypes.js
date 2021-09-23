'use es6';

import keyMirror from 'react-utils/keyMirror';
export default keyMirror({
  ACCOUNT_CREATE: null,
  ACCOUNT_CREATE_SUCCESS: null,
  ACCOUNT_COMPLETE_AUTH: null,
  ACCOUNT_COMPLETE_AUTH_SUCCESS: null,
  ACCOUNT_DELETE: null,
  ACCOUNT_FILTER_UPDATE: null,
  ACCOUNT_CHANNEL_UPDATE: null,
  CHANNELS_FETCH: null,
  CHANNEL_UPDATE: null,
  CHANNEL_DELETE: null,
  CHANNEL_SAVE: null,
  CHANNEL_BULK_SAVE: null,
  CHANNEL_SET_CONNECTING_COUNT: null,
  EMAIL_SETTINGS_FETCH: null,
  EMAIL_SETTINGS_UPDATE: null,
  EMAIL_SETTINGS_SAVE: null,
  SCHEDULE_FETCH: null,
  SCHEDULE_UPDATE: null,
  SCHEDULE_REMOVE_TIMES: null,
  SCHEDULE_ADD_TIMES: null,
  SCHEDULE_SAVE: null,
  RELATIONSHIPS_FETCH: null,
  TWITTER_PROFILE_FETCH: null,
  TWITTER_INTERACTIONS_FETCH: null,
  SOCIAL_ITEM_ACTIONS_FETCH: null,
  FACEBOOK_PROFILE_FETCH: null,
  FULL_INTELLIGENCE_FETCH: null,
  FULL_INTELLIGENCE_BATCH_FETCH: null,
  SOCIAL_CONTACTS_BATCH_FETCH: null,
  FEED_FETCH: null,
  FEED_CLEAR: null,
  PROFILE_OPEN: null,
  PROFILE_CLOSE: null,
  FEED_ITEM_UPDATE: null,
  FEED_ITEM_REMOVE: null,
  FEED_ITEM_ARCHIVE: null,
  FEED_ITEM_UNARCHIVE: null,
  FEED_ITEM_ARCHIVE_BULK: null,
  INBOX_UNREAD_COUNTS_FETCH: null,
  FOLLOW: null,
  UNFOLLOW: null,
  FEED_ITEM_FETCH: null,
  FEED_ITEM_FAVORITE: null,
  FEED_ITEM_UNFAVORITE: null,
  FEED_ITEM_RETWEET: null,
  FEED_ITEM_UNRETWEET: null,
  FEED_ITEM_REPLY: null,
  FEED_ITEM_MENTION: null,
  INBOX_UPDATE: null,
  STREAM_FETCH: null,
  STREAM_CREATE: null,
  STREAM_SAVE: null,
  STREAM_DELETE: null,
  STREAM_MARK_READ: null,
  STREAM_PREVIEW_FETCH: null,
  STREAMS_FETCH: null,
  STREAM_ITEM_FETCH: null,
  STREAM_ITEM_ANCESTORS_FETCH: null,
  STREAM_ITEM_FAVORITE: null,
  STREAM_ITEM_UNFAVORITE: null,
  STREAM_ITEM_RETWEET: null,
  STREAM_ITEM_UNRETWEET: null,
  STREAM_ITEM_REPLY: null,
  STREAM_ITEM_QUOTE: null,
  LANDSCAPE_CREATE: null,
  LANDSCAPE_FETCH: null,
  LANDSCAPE_FOLLOW_COMPANY: null,
  LANDSCAPE_UNFOLLOW_COMPANY: null,
  LANDSCAPE_FETCH_PENDING_OPERATION_STATUS: null,
  LANDSCAPE_FETCH_SOCIAL_POSTS: null,
  LANDSCAPE_CONFIG_UPDATE: null,
  BROADCAST_FETCH: null,
  BROADCAST_UPDATE: null,
  BROADCAST_SAVE: null,
  BROADCAST_PATCH: null,
  BROADCAST_CLONE: null,
  BROADCAST_DELETE: null,
  BROADCAST_DELETE_BULK: null,
  BROADCAST_COUNT_FETCH: null,
  BROADCAST_CHANNEL_COUNT_FETCH: null,
  BROADCAST_LIKE_COUNT_FETCH: null,
  BROADCAST_INTERACTIONS_FETCH: null,
  BROADCAST_FEED_FETCH: null,
  BROADCAST_SOCIAL_ASSISTS_FETCH: null,
  BROADCAST_VIDEO_INSIGHTS_FETCH: null,
  BROADCASTS_MAKE_DRAFT: null,
  BROADCASTS_MAKE_DRAFT_BULK: null,
  BROADCASTS_FETCH: null,
  BROADCASTS_UPLOADED_POLL_BEGAN: null,
  BROADCASTS_UPLOADED_POLL_DONE: null,
  BROADCASTS_UPDATE: null,
  BROADCASTS_PATCH: null,
  BROADCASTS_EXPORT: null,
  BROADCASTS_FETCH_IN_DATE_RANGE: null,
  BROADCAST_GROUP_INIT: null,
  BROADCAST_GROUP_CLONE: null,
  BROADCAST_GROUP_UPDATE: null,
  BROADCAST_GROUP_POPULATE: null,
  // action with same behavior than BROADCAST_GROUP_INIT but that also handles BAP singularities. Expects a BroadcastGroup in payload
  BROADCAST_EDIT: null,
  BROADCAST_GROUP_CREATE: null,
  BROADCAST_GROUP_CREATE_SIMPLE: null,
  BROADCAST_GROUP_SAVE: null,
  BROADCAST_GROUP_BULK_SAVE: null,
  BROADCAST_GROUP_BLUR: null,
  BROADCAST_GROUP_REPLACE: null,
  BROADCAST_GROUP_REPLACE_MESSAGE: null,
  BROADCAST_GROUP_MAKE_DRAFT: null,
  BROADCAST_GROUP_ADD_BROADCAST: null,
  BROADCAST_GROUP_UPDATE_MESSAGE: null,
  BROADCAST_GROUP_UPDATE_BROADCAST: null,
  BROADCAST_GROUP_REMOVE_MESSAGE: null,
  BROADCAST_GROUP_ATTACH_MEDIA: null,
  BROADCAST_GROUP_APPROVE_INIT: null,
  COMPOSER_EXTENSION_INIT: null,
  BROADCAST_CORE_FEED_FETCH: null,
  CALENDAR_BROADCAST_UPDATE: null,
  CALENDAR_BROADCAST_CLEAR: null,
  FOLLOW_URL_CREATE: null,
  FOLLOW_URL_DELETE: null,
  FOLLOW_URLS_FETCH: null,
  FOLLOW_ME_REBUILD: null,
  FOLLOW_ME_LINKS_FETCH: null,
  FOLLOW_ME_LINKS_CREATE: null,
  FOLLOW_ME_LINKS_DELETE: null,
  CAMPAIGNS_FETCH: null,
  REACH_FETCH: null,
  PAGE_PREVIEW_FETCH: null,
  BLOG_POSTS_FETCH: null,
  BLOGS_FETCH: null,
  PAGES_FETCH: null,
  CONTENT_FETCH: null,
  AT_MENTIONS_FETCH: null,
  CONTACT_LIST_FETCH: null,
  CONTACT_LISTS_FETCH: null,
  TWITTER_LISTS_FETCH: null,
  TWITTER_STATUS_FETCH: null,
  BLOG_AUTO_PUBLISH_SAVE: null,
  FILE_UPLOAD: null,
  FILE_UPLOAD_INITIAL: null,
  FILE_UPLOAD_PROGRESS: null,
  FILE_MANAGER_FILE_FETCH: null,
  FILE_MANAGER_INFO_FETCH: null,
  FILE_MANAGER_BULK_INFO_FETCH: null,
  FILE_MANAGER_DOWNLOAD_FROM_URL: null,
  MEDIA_OPEN: null,
  MEDIA_CLOSE: null,
  UNBOXING_FETCH: null,
  UNBOXING_SAVE: null,
  UI_UPDATE: null,
  STORAGE_UPDATE: null,
  REQUEST_UPDATE: null,
  DATAFILTER_UPDATE: null,
  OAUTH_CALLBACK: null,
  SET_CONNECT_STEP: null,
  SET_CONNECTING_ACCOUNT_GUID: null,
  SET_CONNECTING_NETWORK: null,
  SET_ROUTE: null,
  SHOW_NOTIFICATION: null,
  EXPORT_DONE: null,
  BULK_SCHEDULE_UPLOAD: null,
  BULK_SCHEDULE_UPLOAD_DONE: null,
  BULK_UPLOAD_STATUS_CHANGE: null,
  BOOSTED_POSTS_FETCH: null,
  TARGET_LOCATIONS_FETCH: null,
  TARGET_LANGUAGES_FETCH: null,
  TARGET_LOCATIONS_UPDATE: null,
  TARGET_LANGUAGES_UPDATE: null,
  IMAGE_FOR_NETWORKS_UPDATE: null,
  LINK_SHORTENING_DOMAINS_FETCH: null,
  // Originally from social-common/actions/actionTypes
  ACCOUNTS_WITH_CHANNELS_FETCH: null,
  BROADCAST_CORE_DELETE: null,
  BROADCAST_CORE_FETCH: null,
  BROADCAST_CORE_PATCH: null,
  BROADCAST_CORE_UPDATE: null,
  BROADCAST_BOOSTED_POSTS_FETCH: null,
  BROADCAST_AD_CAMPAIGNS_FETCH: null,
  BROADCAST_SESSION_REPORT_FETCH: null,
  BROADCAST_CLICKS_REPORT_FETCH: null,
  BROADCAST_NEW_CONTACTS_FETCH: null,
  EXPERIMENT_TREATMENT_FETCH: null,
  HUB_SETTINGS_FETCH: null,
  HUB_SETTINGS_SAVE: null,
  REPORTING_POSTS_FETCH_BEGAN: null,
  REPORTING_POSTS_FETCH_ERROR: null,
  REPORTING_POSTS_FETCH_SUCCESS: null,
  REPORTING_POST_FETCH_BEGAN: null,
  REPORTING_POST_FETCH_ERROR: null,
  REPORTING_POST_FETCH_SUCCESS: null,
  REPORTING_POST_SELECT: null,
  USER_ATTRIBUTES_FETCH: null,
  USER_ATTRIBUTE_DELETE: null,
  USER_ATTRIBUTE_SAVE: null,
  USER_ATTRIBUTE_UPDATE: null,
  USER_ATTR_FAV_CHANNEL_REPLACE_FOR_NETWORK: null,
  USERS_FETCH_BEGAN: null,
  USERS_FETCH_ERROR: null,
  USERS_FETCH_SUCCESS: null,
  SET_VISIBLE_SHEPHERD_POPOVER: null,
  COMPOSER_HOST_CONTEXT_UPDATE: null,
  SET_EMBEDDED_CONTEXT: null,
  DISMISS_BANNER: null,
  UPDATE_DISMISSED_BANNERS: null
});