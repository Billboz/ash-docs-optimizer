# AshPyro.Extensions.Resource — AshPyro v0.2.1

Project: AshPyro v0.2.1

## Table of Contents

- [ __ View Source ](external_link) AshPyro.Extensions.Resource (AshPyro v0.2.1)
  - __ DSL Documentation
    - __ Index
    - __ Docs
  - __ pyro
    - __ data_table
      - action
          - column
      - action_type
          - column
    - __ form
      - action
          - field
          - field_group
            - field
      - action_type
          - field
          - field_group
            - field
    - __ live_view
      - page
          - list
          - show
          - create
          - update

__

Search documentation of AshPyro __ __

__ Settings

#  [ __ View Source ](external_link) AshPyro.Extensions.Resource (AshPyro v0.2.1)

An Ash resource extension providing declarative configuration of user interfaces via AshPyro components.

##  __ DSL Documentation

###  __ Index

  * pyro
    * data_table
      * action
        * column
      * action_type
        * column
    * form
      * action
        * field
        * field_group
          * field
      * action_type
        * field
        * field_group
          * field
    * live_view
      * page
        * list
        * show
        * create
        * update



###  __ Docs

##  __ pyro

Configure the pyro dashboard for a given resource

  * data_table
    * action
      * column
    * action_type
      * column
  * form
    * action
      * field
      * field_group
        * field
    * action_type
      * field
      * field_group
        * field
  * live_view
    * page
      * list
      * show
      * create
      * update



* * *

###  __ data_table

Configure the appearance of data tables in the [`AshPyro.Extensions.Resource`](external_link) extension.

  * action
    * column
  * action_type
    * column



* * *

  * `:exclude` (list of [`atom/0`](external_link)) - The actions to exclude from data tables. The default value is `[]`.



#### action

Configure the appearance of the data table for specific action(s).
    
    
     * column

  * `:class` \- Customize data table classes.

  * `:default_display` (list of [`atom/0`](external_link)) - The columns to display by default. The default value is `[]`.

  * `:default_sort` \- The columns to sort on by default. The default value is `nil`.

  * `:exclude` (list of [`atom/0`](external_link)) - The fields to exclude from columns. The default value is `[]`.

  * `:description` ([`String.t/0`](external_link)) - The description for this data table (defaults to action's description).

  * `:name` \- Required. The action name(s) for this data table.

  * `:label` ([`String.t/0`](external_link)) - The label for this data table (defaults to capitalized name).




###### column

Declare non-default behavior for a specific data table column in the [`AshPyro.Extensions.Resource`](external_link) extension.

  * `:cell_class` \- Customize cell class.

  * `:class` \- Customize header class.

  * `:description` ([`String.t/0`](external_link)) - Override the default extracted description.

  * `:label` ([`String.t/0`](external_link)) - The label of the column (defaults to capitalized name).

  * `:name` ([`atom/0`](external_link)) - Required. The name of the column.

  * `:path` (list of [`atom/0`](external_link)) - Append to the root path (nested paths are appended).

  * `:render_cell` (function of arity 1) - The default value is `&AshPyro.Extensions.Resource.DataTable.Column.render_cell/1`.

  * `:sortable?` ([`boolean/0`](external_link)) - Set to false to disable sorting. Note: If it it is not technically sortable, it will automatically be set to false. The default value is `true`.

  * `:type` \- The type of the the column. Valid values are :default The default value is `:default`.




#### action_type

Configure the default data table appearance for actions of type(s). Will be ignored by actions configured explicitly.
    
    
     * column

  * `:class` \- Customize data table classes.

  * `:default_display` (list of [`atom/0`](external_link)) - The columns to display by default. The default value is `[]`.

  * `:default_sort` \- The columns to sort on by default. The default value is `nil`.

  * `:exclude` (list of [`atom/0`](external_link)) - The fields to exclude from columns. The default value is `[]`.

  * `:exclude` (list of [`atom/0`](external_link)) - The fields to exclude from columns. The default value is `[]`.

  * `:name` \- Required. The action type(s) for this data table.




###### column

Declare non-default behavior for a specific data table column in the [`AshPyro.Extensions.Resource`](external_link) extension.

  * `:cell_class` \- Customize cell class.

  * `:class` \- Customize header class.

  * `:description` ([`String.t/0`](external_link)) - Override the default extracted description.

  * `:label` ([`String.t/0`](external_link)) - The label of the column (defaults to capitalized name).

  * `:name` ([`atom/0`](external_link)) - Required. The name of the column.

  * `:path` (list of [`atom/0`](external_link)) - Append to the root path (nested paths are appended).

  * `:render_cell` (function of arity 1) - The default value is `&AshPyro.Extensions.Resource.DataTable.Column.render_cell/1`.

  * `:sortable?` ([`boolean/0`](external_link)) - Set to false to disable sorting. Note: If it it is not technically sortable, it will automatically be set to false. The default value is `true`.

  * `:type` \- The type of the the column. Valid values are :default The default value is `:default`.




###  __ form

Configure the appearance of forms in the [`AshPyro.Extensions.Resource`](external_link) extension.

  * action
    * field
    * field_group
      * field
  * action_type
    * field
    * field_group
      * field



* * *

  * `:exclude` (list of [`atom/0`](external_link)) - The actions to exclude from forms. The default value is `[]`.



#### action

Configure the appearance forms forms for specific action(s).
    
    
     * field
     * field_group
       * field

  * `:name` \- Required. The action name(s) for this form.

  * `:label` ([`String.t/0`](external_link)) - The label for this form (defaults to capitalized name).

  * `:description` ([`String.t/0`](external_link)) - The description for this form (defaults to action's description).

  * `:class` \- Customize form classes.




###### field

Declare non-default behavior for a specific form field in the [`AshPyro.Extensions.Resource`](external_link) extension.

  * `:name` ([`atom/0`](external_link)) - Required. The name of the field to be modified

  * `:type` \- The type of the value in the form. Valid values are :default, :long_text, :short_text, :autocomplete, :select, :nested_form The default value is `:default`.

  * `:options` (list of [`term/0`](external_link)) - The options for a select type input. The default value is `[]`.

  * `:label` ([`String.t/0`](external_link)) - The label of the field (defaults to capitalized name).

  * `:description` ([`String.t/0`](external_link)) - Override the default extracted description.

  * `:class` \- Customize class.

  * `:input_class` \- Customize input class.

  * `:autofocus` ([`boolean/0`](external_link)) - Autofocus the field. The default value is `false`.

  * `:prompt` ([`String.t/0`](external_link)) - Override the default prompt.

  * `:path` (list of [`atom/0`](external_link)) - Append to the root path (nested paths are appended).

  * `:autocomplete_search_action` ([`atom/0`](external_link)) - Set the autocomplete search action name. The default value is `:autocomplete`.

  * `:autocomplete_search_arg` ([`atom/0`](external_link)) - Set the autocomplete search argument key. The default value is `:search`.

  * `:autocomplete_option_label_key` ([`atom/0`](external_link)) - Override the default autocomplete key used as a label. The default value is `:label`.

  * `:autocomplete_option_value_key` ([`atom/0`](external_link)) - Override the default autocomplete key used as a value. The default value is `:id`.




###### field_group

Configure the appearance of form field groups in the [`AshPyro.Extensions.Resource`](external_link) extension.
    
    
      * field

  * `:name` ([`atom/0`](external_link)) - Required. The name of the field group.

  * `:label` ([`String.t/0`](external_link)) - The label of this group (defaults to capitalized name).

  * `:class` \- Customize class.

  * `:path` (list of [`atom/0`](external_link)) - Append to the root path (nested paths are appended).




####### field

Declare non-default behavior for a specific form field in the [`AshPyro.Extensions.Resource`](external_link) extension.

  * `:name` ([`atom/0`](external_link)) - Required. The name of the field to be modified

  * `:type` \- The type of the value in the form. Valid values are :default, :long_text, :short_text, :autocomplete, :select, :nested_form The default value is `:default`.

  * `:options` (list of [`term/0`](external_link)) - The options for a select type input. The default value is `[]`.

  * `:label` ([`String.t/0`](external_link)) - The label of the field (defaults to capitalized name).

  * `:description` ([`String.t/0`](external_link)) - Override the default extracted description.

  * `:class` \- Customize class.

  * `:input_class` \- Customize input class.

  * `:autofocus` ([`boolean/0`](external_link)) - Autofocus the field. The default value is `false`.

  * `:prompt` ([`String.t/0`](external_link)) - Override the default prompt.

  * `:path` (list of [`atom/0`](external_link)) - Append to the root path (nested paths are appended).

  * `:autocomplete_search_action` ([`atom/0`](external_link)) - Set the autocomplete search action name. The default value is `:autocomplete`.

  * `:autocomplete_search_arg` ([`atom/0`](external_link)) - Set the autocomplete search argument key. The default value is `:search`.

  * `:autocomplete_option_label_key` ([`atom/0`](external_link)) - Override the default autocomplete key used as a label. The default value is `:label`.

  * `:autocomplete_option_value_key` ([`atom/0`](external_link)) - Override the default autocomplete key used as a value. The default value is `:id`.




#### action_type

Configure default form appearance for actions of type(s). Will be ignored by actions configured explicitly.
    
    
     * field
     * field_group
       * field

  * `:name` \- Required. The action type(s) for this form.

  * `:class` \- Customize form classes.




###### field

Declare non-default behavior for a specific form field in the [`AshPyro.Extensions.Resource`](external_link) extension.

  * `:name` ([`atom/0`](external_link)) - Required. The name of the field to be modified

  * `:type` \- The type of the value in the form. Valid values are :default, :long_text, :short_text, :autocomplete, :select, :nested_form The default value is `:default`.

  * `:options` (list of [`term/0`](external_link)) - The options for a select type input. The default value is `[]`.

  * `:label` ([`String.t/0`](external_link)) - The label of the field (defaults to capitalized name).

  * `:description` ([`String.t/0`](external_link)) - Override the default extracted description.

  * `:class` \- Customize class.

  * `:input_class` \- Customize input class.

  * `:autofocus` ([`boolean/0`](external_link)) - Autofocus the field. The default value is `false`.

  * `:prompt` ([`String.t/0`](external_link)) - Override the default prompt.

  * `:path` (list of [`atom/0`](external_link)) - Append to the root path (nested paths are appended).

  * `:autocomplete_search_action` ([`atom/0`](external_link)) - Set the autocomplete search action name. The default value is `:autocomplete`.

  * `:autocomplete_search_arg` ([`atom/0`](external_link)) - Set the autocomplete search argument key. The default value is `:search`.

  * `:autocomplete_option_label_key` ([`atom/0`](external_link)) - Override the default autocomplete key used as a label. The default value is `:label`.

  * `:autocomplete_option_value_key` ([`atom/0`](external_link)) - Override the default autocomplete key used as a value. The default value is `:id`.




###### field_group

Configure the appearance of form field groups in the [`AshPyro.Extensions.Resource`](external_link) extension.
    
    
      * field

  * `:name` ([`atom/0`](external_link)) - Required. The name of the field group.

  * `:label` ([`String.t/0`](external_link)) - The label of this group (defaults to capitalized name).

  * `:class` \- Customize class.

  * `:path` (list of [`atom/0`](external_link)) - Append to the root path (nested paths are appended).




####### field

Declare non-default behavior for a specific form field in the [`AshPyro.Extensions.Resource`](external_link) extension.

  * `:name` ([`atom/0`](external_link)) - Required. The name of the field to be modified

  * `:type` \- The type of the value in the form. Valid values are :default, :long_text, :short_text, :autocomplete, :select, :nested_form The default value is `:default`.

  * `:options` (list of [`term/0`](external_link)) - The options for a select type input. The default value is `[]`.

  * `:label` ([`String.t/0`](external_link)) - The label of the field (defaults to capitalized name).

  * `:description` ([`String.t/0`](external_link)) - Override the default extracted description.

  * `:class` \- Customize class.

  * `:input_class` \- Customize input class.

  * `:autofocus` ([`boolean/0`](external_link)) - Autofocus the field. The default value is `false`.

  * `:prompt` ([`String.t/0`](external_link)) - Override the default prompt.

  * `:path` (list of [`atom/0`](external_link)) - Append to the root path (nested paths are appended).

  * `:autocomplete_search_action` ([`atom/0`](external_link)) - Set the autocomplete search action name. The default value is `:autocomplete`.

  * `:autocomplete_search_arg` ([`atom/0`](external_link)) - Set the autocomplete search argument key. The default value is `:search`.

  * `:autocomplete_option_label_key` ([`atom/0`](external_link)) - Override the default autocomplete key used as a label. The default value is `:label`.

  * `:autocomplete_option_value_key` ([`atom/0`](external_link)) - Override the default autocomplete key used as a value. The default value is `:id`.




###  __ live_view

Configure LiveViews in the [`AshPyro.Extensions.Resource`](external_link) extension.

  * page
    * list
    * show
    * create
    * update



* * *

#### page

Configure a page for this resource.
    
    
     * list
     * show
     * create
     * update

  * `:api` ([`atom/0`](external_link)) - Required. The API for routes on this page (can also specify per-route/per-action).

  * `:class` \- Customize page classes.

  * `:keep_live?` ([`boolean/0`](external_link)) - Subscribe to resource updates and keep the view up to date. The default value is `false`.

  * `:name` ([`atom/0`](external_link)) - Required. The live action for this page.

  * `:path` ([`String.t/0`](external_link)) - Required. The route path for this page.

  * `:route_helper` ([`atom/0`](external_link)) - The route helper name to be generated. Defaults to [name]_path.

  * `:view_as` \- The view style of the page:

    * `:list_and_modal` \- Always list view, show/create/edit in a modal
    * `:show_and_modal` \- List view for list actions, show as a dedicated view, create/edit in a modal on show
    * `:individual` \- All actions are a dedicated view Valid values are :list_and_modal, :show_and_modal, :individual The default value is `:list_and_modal`.



###### list

Configure a list action for this resource.

  * `:path` ([`String.t/0`](external_link)) - Required. The route path for this action.

  * `:live_action` ([`atom/0`](external_link)) - Required. The live action for this action.

  * `:action` ([`atom/0`](external_link)) - Required. The action to use to load the records.

  * `:display_as` \- How to display the action. Valid values are :data_table, :card_grid The default value is `:data_table`.

  * `:label` \- The label for this action (defaults to humanized live_action).

  * `:description` \- The description for this action.

  * `:class` \- Customize action classes.

  * `:pagination` \- The pagination type (defaults to `:offset` if available). Valid values are :keyset, :offset, :none

  * `:default_limit` ([`integer/0`](external_link)) - The default pagination limit (defaults to the resource's `default_limit`, falling back to `max_page_size`).

  * `:count?` ([`boolean/0`](external_link)) - Whether to count the query (defaults to true for `:offset` pagination if available).




###### show

Configure a show action for this resource.

  * `:path` ([`String.t/0`](external_link)) - Required. The route path for this action.

  * `:live_action` ([`atom/0`](external_link)) - Required. The live action for this action.

  * `:action` ([`atom/0`](external_link)) - Required. The action to use to load the record.

  * `:display_as` \- How to display the action. Valid values are :card The default value is `:card`.

  * `:label` \- The label for this action (defaults to humanized live_action).

  * `:description` \- The description for this action.

  * `:class` \- Customize action classes.

  * `:identity` \- The identity used to load the record. The default value is `:id`.




###### create

Configure a create action for this resource.

  * `:path` ([`String.t/0`](external_link)) - Required. The route path for this action.

  * `:live_action` ([`atom/0`](external_link)) - Required. The live action for this action.

  * `:action` ([`atom/0`](external_link)) - Required. The action to use to create the record.

  * `:display_as` \- How to display the action. Valid values are :form The default value is `:form`.

  * `:label` \- The label for this action (defaults to humanized live_action).

  * `:description` \- The description for this action.

  * `:class` \- Customize action classes.

  * `:identity` \- The identity used to load the record. The default value is `:id`.




###### update

Configure a update action for this resource.

  * `:path` ([`String.t/0`](external_link)) - Required. The route path for this action.

  * `:live_action` ([`atom/0`](external_link)) - Required. The live action for this action.

  * `:action` ([`atom/0`](external_link)) - Required. The action to use to update the record.

  * `:load_action` ([`atom/0`](external_link)) - The action to use to load the record.

  * `:display_as` \- How to display the action. Valid values are :form The default value is `:form`.

  * `:label` \- The label for this action (defaults to humanized live_action).

  * `:description` \- The description for this action.

  * `:class` \- Customize action classes.

  * `:identity` \- The identity used to load the record. The default value is `:id`.



