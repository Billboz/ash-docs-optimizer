sidebarNodes={"modules":[{"id":"AshAuthentication.Phoenix","deprecated":false,"group":"Welcome","title":"AshAuthentication.Phoenix","sections":[{"id":"Where to start.","anchor":"module-where-to-start"}]},{"id":"AshAuthentication.Phoenix.Controller","deprecated":false,"group":"Routing and Controller","title":"AshAuthentication.Phoenix.Controller","sections":[{"id":"Example","anchor":"module-example"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"activity/0","deprecated":false,"title":"activity()","anchor":"t:activity/0"},{"id":"t/0","deprecated":false,"title":"t()","anchor":"t:t/0"},{"id":"token/0","deprecated":false,"title":"token()","anchor":"t:token/0"},{"id":"user/0","deprecated":false,"title":"user()","anchor":"t:user/0"}],"key":"types"},{"name":"Callbacks","nodes":[{"id":"failure/3","deprecated":false,"title":"failure(t, activity, reason)","anchor":"c:failure/3"},{"id":"sign_out/2","deprecated":false,"title":"sign_out(t, params)","anchor":"c:sign_out/2"},{"id":"success/4","deprecated":false,"title":"success(t, activity, user, token)","anchor":"c:success/4"}],"key":"callbacks"}]},{"id":"AshAuthentication.Phoenix.LiveSession","deprecated":false,"group":"Routing and Controller","title":"AshAuthentication.Phoenix.LiveSession","sections":[],"nodeGroups":[{"name":"Functions","nodes":[{"id":"ash_authentication_live_session/3","deprecated":false,"title":"ash_authentication_live_session(session_name \\\\ :ash_authentication, opts \\\\ [], list)","anchor":"ash_authentication_live_session/3"},{"id":"generate_session/3","deprecated":false,"title":"generate_session(conn, otp_app \\\\ nil, additional_hooks \\\\ [])","anchor":"generate_session/3"},{"id":"on_mount/4","deprecated":false,"title":"on_mount(arg1, params, session, socket)","anchor":"on_mount/4"}],"key":"functions"}]},{"id":"AshAuthentication.Phoenix.Plug","deprecated":false,"group":"Routing and Controller","title":"AshAuthentication.Phoenix.Plug","sections":[],"nodeGroups":[{"name":"Functions","nodes":[{"id":"load_from_bearer/2","deprecated":false,"title":"load_from_bearer(conn, opts)","anchor":"load_from_bearer/2"},{"id":"load_from_session/2","deprecated":false,"title":"load_from_session(conn, opts)","anchor":"load_from_session/2"},{"id":"revoke_bearer_tokens/2","deprecated":false,"title":"revoke_bearer_tokens(conn, opts)","anchor":"revoke_bearer_tokens/2"},{"id":"store_in_session/2","deprecated":false,"title":"store_in_session(conn, actor)","anchor":"store_in_session/2"}],"key":"functions"}]},{"id":"AshAuthentication.Phoenix.Router","deprecated":false,"group":"Routing and Controller","title":"AshAuthentication.Phoenix.Router","sections":[{"id":"Usage","anchor":"module-usage"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"auth_route_options/0","deprecated":false,"title":"auth_route_options()","anchor":"t:auth_route_options/0"},{"id":"path_option/0","deprecated":false,"title":"path_option()","anchor":"t:path_option/0"},{"id":"scope_opts_option/0","deprecated":false,"title":"scope_opts_option()","anchor":"t:scope_opts_option/0"},{"id":"to_option/0","deprecated":false,"title":"to_option()","anchor":"t:to_option/0"}],"key":"types"},{"name":"Functions","nodes":[{"id":"auth_routes/3","deprecated":false,"title":"auth_routes(auth_controller, resource_or_resources, opts \\\\ [])","anchor":"auth_routes/3"},{"id":"auth_routes_for/2","deprecated":false,"title":"auth_routes_for(resource, opts)","anchor":"auth_routes_for/2"},{"id":"reset_route/1","deprecated":false,"title":"reset_route(opts \\\\ [])","anchor":"reset_route/1"},{"id":"sign_in_route/1","deprecated":false,"title":"sign_in_route(opts \\\\ [])","anchor":"sign_in_route/1"},{"id":"sign_out_route/3","deprecated":false,"title":"sign_out_route(auth_controller, path \\\\ \"/sign-out\", opts \\\\ [])","anchor":"sign_out_route/3"}],"key":"functions"}]},{"id":"AshAuthentication.Phoenix.Components.Apple","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.Apple","sections":[{"id":"Component hierarchy","anchor":"module-component-hierarchy"},{"id":"Props","anchor":"module-props"},{"id":"Overrides","anchor":"module-overrides"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"props/0","deprecated":false,"title":"props()","anchor":"t:props/0"}],"key":"types"},{"name":"Functions","nodes":[{"id":"icon/1","deprecated":false,"title":"icon(assigns)","anchor":"icon/1"}],"key":"functions"}]},{"id":"AshAuthentication.Phoenix.Components.Banner","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.Banner","sections":[{"id":"Props","anchor":"module-props"},{"id":"Overrides","anchor":"module-overrides"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"props/0","deprecated":false,"title":"props()","anchor":"t:props/0"}],"key":"types"}]},{"id":"AshAuthentication.Phoenix.Components.Helpers","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.Helpers","sections":[],"nodeGroups":[{"name":"Functions","nodes":[{"id":"auth_path/6","deprecated":false,"title":"auth_path(socket, subject_name, auth_routes_prefix, strategy, phase, params \\\\ %{})","anchor":"auth_path/6"},{"id":"otp_app_from_socket/1","deprecated":false,"title":"otp_app_from_socket(socket)","anchor":"otp_app_from_socket/1"},{"id":"route_helpers/1","deprecated":false,"title":"route_helpers(socket)","anchor":"route_helpers/1"}],"key":"functions"}]},{"id":"AshAuthentication.Phoenix.Components.HorizontalRule","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.HorizontalRule","sections":[{"id":"Overrides","anchor":"module-overrides"},{"id":"Props","anchor":"module-props"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"props/0","deprecated":false,"title":"props()","anchor":"t:props/0"}],"key":"types"}]},{"id":"AshAuthentication.Phoenix.Components.MagicLink","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.MagicLink","sections":[{"id":"Component hierarchy","anchor":"module-component-hierarchy"},{"id":"Props","anchor":"module-props"},{"id":"Overrides","anchor":"module-overrides"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"props/0","deprecated":false,"title":"props()","anchor":"t:props/0"}],"key":"types"}]},{"id":"AshAuthentication.Phoenix.Components.OAuth2","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.OAuth2","sections":[{"id":"Component hierarchy","anchor":"module-component-hierarchy"},{"id":"Props","anchor":"module-props"},{"id":"Overrides","anchor":"module-overrides"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"props/0","deprecated":false,"title":"props()","anchor":"t:props/0"}],"key":"types"},{"name":"Functions","nodes":[{"id":"icon/1","deprecated":false,"title":"icon(assigns)","anchor":"icon/1"}],"key":"functions"}]},{"id":"AshAuthentication.Phoenix.Components.Password","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.Password","sections":[{"id":"Component hierarchy","anchor":"module-component-hierarchy"},{"id":"Props","anchor":"module-props"},{"id":"Slots","anchor":"module-slots"},{"id":"Overrides","anchor":"module-overrides"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"props/0","deprecated":false,"title":"props()","anchor":"t:props/0"}],"key":"types"}]},{"id":"AshAuthentication.Phoenix.Components.Password.Input","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.Password.Input","sections":[{"id":"Component hierarchy","anchor":"module-component-hierarchy"},{"id":"Overrides","anchor":"module-overrides"}],"nodeGroups":[{"name":"Functions","nodes":[{"id":"error/1","deprecated":false,"title":"error(assigns)","anchor":"error/1"},{"id":"identity_field/1","deprecated":false,"title":"identity_field(assigns)","anchor":"identity_field/1"},{"id":"password_confirmation_field/1","deprecated":false,"title":"password_confirmation_field(assigns)","anchor":"password_confirmation_field/1"},{"id":"password_field/1","deprecated":false,"title":"password_field(assigns)","anchor":"password_field/1"},{"id":"submit/1","deprecated":false,"title":"submit(assigns)","anchor":"submit/1"}],"key":"functions"}]},{"id":"AshAuthentication.Phoenix.Components.Password.RegisterForm","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.Password.RegisterForm","sections":[{"id":"Component hierarchy","anchor":"module-component-hierarchy"},{"id":"Props","anchor":"module-props"},{"id":"Overrides","anchor":"module-overrides"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"props/0","deprecated":false,"title":"props()","anchor":"t:props/0"}],"key":"types"}]},{"id":"AshAuthentication.Phoenix.Components.Password.ResetForm","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.Password.ResetForm","sections":[{"id":"Component hierarchy","anchor":"module-component-hierarchy"},{"id":"Props","anchor":"module-props"},{"id":"Overrides","anchor":"module-overrides"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"props/0","deprecated":false,"title":"props()","anchor":"t:props/0"}],"key":"types"}]},{"id":"AshAuthentication.Phoenix.Components.Password.SignInForm","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.Password.SignInForm","sections":[{"id":"Component hierarchy","anchor":"module-component-hierarchy"},{"id":"Props","anchor":"module-props"},{"id":"Overrides","anchor":"module-overrides"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"props/0","deprecated":false,"title":"props()","anchor":"t:props/0"}],"key":"types"}]},{"id":"AshAuthentication.Phoenix.Components.Reset","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.Reset","sections":[{"id":"Component hierarchy","anchor":"module-component-hierarchy"},{"id":"Props","anchor":"module-props"},{"id":"Overrides","anchor":"module-overrides"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"props/0","deprecated":false,"title":"props()","anchor":"t:props/0"}],"key":"types"}]},{"id":"AshAuthentication.Phoenix.Components.Reset.Form","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.Reset.Form","sections":[{"id":"Component hierarchy","anchor":"module-component-hierarchy"},{"id":"Props","anchor":"module-props"},{"id":"Overrides","anchor":"module-overrides"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"props/0","deprecated":false,"title":"props()","anchor":"t:props/0"}],"key":"types"}]},{"id":"AshAuthentication.Phoenix.Components.SignIn","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Components.SignIn","sections":[{"id":"Component hierarchy","anchor":"module-component-hierarchy"},{"id":"Overrides","anchor":"module-overrides"},{"id":"Props","anchor":"module-props"}],"nodeGroups":[{"name":"Types","nodes":[{"id":"props/0","deprecated":false,"title":"props()","anchor":"t:props/0"}],"key":"types"}]},{"id":"AshAuthentication.Phoenix.Overrides","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Overrides","sections":[],"nodeGroups":[{"name":"Functions","nodes":[{"id":"override/2","deprecated":false,"title":"override(component, list)","anchor":"override/2"},{"id":"set/2","deprecated":false,"title":"set(selector, value)","anchor":"set/2"}],"key":"functions"}]},{"id":"AshAuthentication.Phoenix.Overrides.Default","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Overrides.Default","sections":[],"nodeGroups":[{"name":"Functions","nodes":[{"id":"overrides/0","deprecated":false,"title":"overrides()","anchor":"overrides/0"}],"key":"functions"}]},{"id":"AshAuthentication.Phoenix.Overrides.Info","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Overrides.Info","sections":[],"nodeGroups":[{"name":"Functions","nodes":[{"id":"all_overridable_modules/0","deprecated":false,"title":"all_overridable_modules()","anchor":"all_overridable_modules/0"}],"key":"functions"}]},{"id":"AshAuthentication.Phoenix.Overrides.Overridable","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.Overrides.Overridable","sections":[],"nodeGroups":[{"name":"Callbacks","nodes":[{"id":"__overrides__/0","deprecated":false,"title":"__overrides__()","anchor":"c:__overrides__/0"}],"key":"callbacks"},{"name":"Functions","nodes":[{"id":"override_for/3","deprecated":false,"title":"override_for(overrides, selector, default \\\\ nil)","anchor":"override_for/3"}],"key":"functions"}]},{"id":"AshAuthentication.Phoenix.ResetLive","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.ResetLive","sections":[{"id":"Overrides","anchor":"module-overrides"}]},{"id":"AshAuthentication.Phoenix.SignInLive","deprecated":false,"group":"Customisation","title":"AshAuthentication.Phoenix.SignInLive","sections":[{"id":"Overrides","anchor":"module-overrides"}]},{"id":"AshAuthentication.Phoenix.Utils.Flash","deprecated":false,"group":"Utilities","title":"AshAuthentication.Phoenix.Utils.Flash","sections":[],"nodeGroups":[{"name":"Functions","nodes":[{"id":"on_mount/4","deprecated":false,"title":"on_mount(name, params, session, socket)","anchor":"on_mount/4"},{"id":"put_flash!/3","deprecated":false,"title":"put_flash!(socket, type, message)","anchor":"put_flash!/3"}],"key":"functions"}]}],"extras":[{"id":"api-reference","group":"","title":"API Reference","headers":[{"id":"Modules","anchor":"modules"}]},{"id":"readme","group":"","title":"README","headers":[{"id":"About the Documentation","anchor":"about-the-documentation"},{"id":"Tutorials","anchor":"tutorials"},{"id":"Related packages","anchor":"related-packages"}]},{"id":"get-started","group":"Tutorials","title":"Getting Started Ash Authentication Phoenix","headers":[{"id":"Green Field Phoenix Application","anchor":"green-field-phoenix-application"},{"id":"Basic Ash Setup","anchor":"basic-ash-setup"},{"id":"AshPostgres.Repo Setup","anchor":"ashpostgres-repo-setup"},{"id":"Accounts Domain and Resources","anchor":"accounts-domain-and-resources"},{"id":"Router Setup","anchor":"router-setup"},{"id":"AuthController","anchor":"authcontroller"},{"id":"Example home.html.heex","anchor":"example-home-html-heex"},{"id":"Reset Password","anchor":"reset-password"}]},{"id":"liveview","group":"Tutorials","title":"Setting up your routes for LiveView","headers":[{"id":"Authentication helper","anchor":"authentication-helper"}]},{"id":"ui-overrides","group":"Tutorials","title":"Overriding Ash Authentication Phoenix's default UI","headers":[{"id":"Understanding overrides","anchor":"understanding-overrides"},{"id":"Defining your own override module","anchor":"defining-your-own-override-module"},{"id":"Overriding at the router","anchor":"overriding-at-the-router"}]}],"tasks":[]}