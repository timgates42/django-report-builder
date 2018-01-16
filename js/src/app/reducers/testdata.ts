import { State } from './reports';

export const populatedReports: State = {
  reports: [
    {
      id: 1,
      name: 'bopo',
      modified: '2018-01-08',
      root_model: 16,
      root_model_name: 'comment',
      user_created: {
        first_name: '',
        last_name: '',
        id: 1
      }
    }
  ],
  selectedReport: {
    id: 1,
    name: 'bopo',
    description: 'asdlkmad',
    modified: '2018-01-08',
    root_model: 16,
    root_model_name: 'comment',
    displayfield_set: [],
    distinct: false,
    user_created: 1,
    user_modified: null,
    filterfield_set: [],
    report_file: null,
    report_file_creation: null
  },
  relatedFields: [
    {
      field_name: 'content_type',
      verbose_name: 'content type',
      path: '',
      help_text: '',
      model_id: 16,
      parent_model_name: 'content_type',
      parent_model_app_label: false,
      included_model: true,
      children: []
    }
  ],
  fields: [
    {
      name: 'object_pk',
      field: 'object_pk',
      field_verbose: 'object pk',
      field_type: 'TextField',
      is_default: true,
      field_choices: [],
      can_filter: true,
      path: '',
      path_verbose: '',
      help_text: ''
    },
    {
      name: 'id',
      field: 'id',
      field_verbose: 'ID',
      field_type: 'AutoField',
      is_default: true,
      field_choices: [],
      can_filter: true,
      path: '',
      path_verbose: '',
      help_text: ''
    }
  ]
};

export const newRelatedFields = [
  {
    field_name: 'comment',
    verbose_name: 'comment_set',
    path: 'content_type__',
    help_text: '',
    model_id: 5,
    parent_model_name: 'comment',
    parent_model_app_label: false,
    included_model: true
  },
  {
    field_name: 'report',
    verbose_name: 'report_set',
    path: 'content_type__',
    help_text: '',
    model_id: 5,
    parent_model_name: 'report',
    parent_model_app_label: false,
    included_model: true
  },
  {
    field_name: 'permission',
    verbose_name: 'permission_set',
    path: 'content_type__',
    help_text: '',
    model_id: 5,
    parent_model_name: 'permission',
    parent_model_app_label: false,
    included_model: true
  },
  {
    field_name: 'logentry',
    verbose_name: 'logentry_set',
    path: 'content_type__',
    help_text: '',
    model_id: 5,
    parent_model_name: 'logentry',
    parent_model_app_label: false,
    included_model: true
  }
];
