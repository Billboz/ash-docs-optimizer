# AshPhoenix.LiveView — ash_phoenix v2.1.2

Project: ash_phoenix v2.1.2

## Table of Contents

- [ __ View Source ](external_link) AshPhoenix.LiveView (ash_phoenix v2.1.2)
- __ Summary
  - Types
  - Functions
- __ Types
- assign()
- assigns()
- callback()
- callback_result()
- liveness_options()
- socket()
- topic()
- __ Functions
- can_link_to_page?(page, target)
- change_page(socket, assign, target)
- handle_live(socket, notification, assigns, refetch_info \\\ [])
- keep_live(socket, assign, callback, opts \\\ [])
  - __ Important
  - __ Pagination
  - __ Options:
      - refetch_interval
      - refetch_window
      - Future Plans
- last_page(arg1)
- next_page?(page)
- on_page?(page, num)
- page_from_params(params, default_limit, count? \\\ false)
- page_link_params(offset, target)
- page_number(arg1)
- page_params(keyset)
- prev_page?(page)

__

Search documentation of ash_phoenix __ __

__ Settings

#  [ __ View Source ](external_link) AshPhoenix.LiveView (ash_phoenix v2.1.2)

Utilities for keeping Ash query results up to date in a LiveView.

#  __ Summary

##  Types

assign()

assigns()

callback()

callback_result()

liveness_options()

socket()

topic()

##  Functions

can_link_to_page?(page, target)

change_page(socket, assign, target)

handle_live(socket, notification, assigns, refetch_info \\\ [])

Incorporates an [`Ash.Notifier.Notification`](3.4.1/Ash.Notifier.Notification.html) into the query results, based on the liveness configuration.

keep_live(socket, assign, callback, opts \\\ [])

Runs the callback, and stores the information required to keep it live in the socket assigns.

last_page(arg1)

next_page?(page)

on_page?(page, num)

page_from_params(params, default_limit, count? \\\ false)

page_link_params(offset, target)

page_number(arg1)

page_params(keyset)

prev_page?(page)

#  __ Types

__ Link to this type

# assign()

[ __ View Source ](external_link)
    
    
    @type assign() :: [atom](external_link)()

__ Link to this type

# assigns()

[ __ View Source ](external_link)
    
    
    @type assigns() :: [map](external_link)()

__ Link to this type

# callback()

[ __ View Source ](external_link)
    
    
    @type callback() ::
      (socket() -> callback_result())
      | (socket(), [Keyword.t](external_link)() | nil -> callback_result())

__ Link to this type

# callback_result()

[ __ View Source ](external_link)
    
    
    @type callback_result() :: [struct](external_link)() | [[struct](external_link)()] | [Ash.Page.page](3.4.1/Ash.Page.html#t:page/0)() | nil

__ Link to this type

# liveness_options()

[ __ View Source ](external_link)
    
    
    @type liveness_options() :: [Keyword.t](external_link)()

__ Link to this type

# socket()

[ __ View Source ](external_link)
    
    
    @type socket() :: [term](external_link)()

__ Link to this type

# topic()

[ __ View Source ](external_link)
    
    
    @type topic() :: [String.t](external_link)()

#  __ Functions

__ Link to this function

# can_link_to_page?(page, target)

[ __ View Source ](external_link)

__ Link to this function

# change_page(socket, assign, target)

[ __ View Source ](external_link)

__ Link to this function

# handle_live(socket, notification, assigns, refetch_info \\\ [])

[ __ View Source ](external_link)

Incorporates an [`Ash.Notifier.Notification`](3.4.1/Ash.Notifier.Notification.html) into the query results, based on the liveness configuration.

You will want to match on receiving a notification from Ash, and the easiest way to do that is to match on the payload like so:
    
    
      @impl true
    def handle_info(%{topic: topic, payload: %Ash.Notifier.Notification{}}, socket) do
      {:noreply, handle_live(socket, topic, [:query1, :query2, :query3])}
    end

Feel free to intercept notifications and do your own logic to respond to events. Ultimately, all that matters is that you also call `handle_live/3` if you want it to update your query results.

The assign or list of assigns passed as the third argument must be the same names passed into `keep_live`. If you only want some queries to update based on some events, you can define multiple matches on events, and only call `handle_live/3` with the assigns that should be updated for that notification.

__ Link to this function

# keep_live(socket, assign, callback, opts \\\ [])

[ __ View Source ](external_link)
    
    
    @spec keep_live(socket(), assign(), callback(), liveness_options()) :: socket()

Runs the callback, and stores the information required to keep it live in the socket assigns.

The data will be assigned to the provided key, e.g `keep_live(socket, :me, ...)` would assign the results to `:me` (accessed as `@me` in the template).

Additionally, you'll need to define a `handle_info/2` callback for your liveview to receive any notifications, and pass that notification into `handle_live/3`. See `handle_live/3` for more.

##  __ Important

The logic for handling events to keep data live is currently very limited. It will simply rerun the query every time. To this end, you should feel free to intercept individual events and handle them yourself for more optimized liveness.

##  __ Pagination

To make paginated views convenient, as well as making it possible to keep those views live, Ash does not simply rerun the query when it gets an update, as that could involve shuffling the records around on the page. Eventually this will be configurable, but for now, Ash simply adjusts the query to only include the records that are on the page. If a record would be removed from a page due to a data change, it will simply be left there. For the best performance, use `keyset` pagination. If you _need_ the ability to jump to a page by number, you'll want to use `offset` pagination, but keep in mind that it performs worse on large tables.

To support this, accept a second parameter to your callback function, which will be the options to use in `page_opts`

##  __ Options:

  * `:subscribe` \- A topic or list of topics that should cause this data to update.

  * `:refetch?` ([`boolean/0`](external_link)) - A boolean flag indicating whether a refetch is allowed to happen. Defaults to `true`

  * `:after_fetch` ([`term/0`](external_link)) - A two argument function that takes the results, and the socket, and returns the new socket. Can be used to set assigns based on the result of the query.

  * `:results` \- For list and page queries, by default the records shown are never changed (unless the page changes) Valid values are :keep, :lose The default value is `:keep`.

  * `:load_until_connected?` ([`boolean/0`](external_link)) - If the socket is not connected, then the value of the provided assign is set to `:loading`. Has no effect if `initial` is provided.

  * `:initial` ([`term/0`](external_link)) - Results to use instead of running the query immediately.

  * `:refetch_interval` ([`non_neg_integer/0`](external_link)) - An interval (in ms) to periodically refetch the query

  * `:refetch_window` ([`non_neg_integer/0`](external_link)) - The minimum time (in ms) between refetches, including refetches caused by notifications.




A great way to get readable millisecond values is to use the functions in erlang's `:timer` module, like [`:timer.hours/1`](external_link), [`:timer.minutes/1`](external_link), and [`:timer.seconds/1`](external_link)

#### refetch_interval

If this option is set, a message is sent as `{:refetch, assign_name, opts}` on that interval. You can then match on that event, like so:
    
    
    def handle_info({:refetch, assign, opts}, socket) do
      {:noreply, handle_live(socket, :refetch, assign, opts)}
    end

This is the equivalent of `:timer.send_interval(interval, {:refetch, assign, opts})`, so feel free to roll your own solution if you have complex refetching requirements.

#### refetch_window

Normally, when a pubsub message is received the query is rerun. This option will cause the query to wait at least this amount of time before doing a refetch. This is accomplished with [`Process.send_after/4`](external_link), and recording the last time each query was refetched. For example if a refetch happens at time `0`, and the `refetch_window` is 10,000 ms, we would refetch, and record the time. Then if another refetch should happen 5,000 ms later, we would look and see that we need to wait another 5,000ms. So we use [`Process.send_after/4`](external_link) to send a `{:refetch, assign, opts}` message in 5,000ms. The time that a refetch was requested is tracked, so if the data has since been refetched, it won't be refetched again.

#### Future Plans

One interesting thing here is that, given that we know the scope of data that a resource cares about, we should be able to make optimizations to this code, to support partial refetches, or even just updating the data directly. However, this will need to be carefully considered, as the risks involve showing users data they could be unauthorized to see, or having state in the socket that is inconsistent.

__ Link to this function

# last_page(arg1)

[ __ View Source ](external_link)

__ Link to this function

# next_page?(page)

[ __ View Source ](external_link)

__ Link to this function

# on_page?(page, num)

[ __ View Source ](external_link)

__ Link to this function

# page_from_params(params, default_limit, count? \\\ false)

[ __ View Source ](external_link)

__ Link to this function

# page_link_params(offset, target)

[ __ View Source ](external_link)

__ Link to this function

# page_number(arg1)

[ __ View Source ](external_link)

__ Link to this function

# page_params(keyset)

[ __ View Source ](external_link)

__ Link to this function

# prev_page?(page)

[ __ View Source ](external_link)
