# Ash.Reactor.AshStep — ash v3.4.8

Project: ash v3.4.8

## Table of Contents

- [ __ View Source ](external_link) Ash.Reactor.AshStep (ash v3.4.8)
  - __ Options

__

Search documentation of ash __ __

__ Settings

#  [ __ View Source ](external_link) Ash.Reactor.AshStep (ash v3.4.8)

A reactor step which runs a step-module or an anonymous function, and enqueues any returned notifications before returning.

The following return values are supported: `{:ok, result}`, `{:ok, result, notifications}`, `{:ok, result, notifications, new_steps}`

Example:
    
    
    ash_step :maybe_update_post do
      run fn %{post: post, new_amount_of_likes: new_amount_of_likes}, ctx ->
        opts = Ash.Context.to_opts(ctx, return_notifications?: true)
        if post.amount_of_likes != new_amount_of_likes do
          Post.update(post, %{amount_of_likes: new_amount_of_likes}, opts)
        else
          {:ok, post}
        end
    end

##  __ Options

  * `run` \- a one or two arity function or MFA which will be called as the run function of the step.
  * `compensate` \- a one to three arity function or MFA which will be called as the compensate function of the step. Optional.
  * `undo` \- a one to three arity function or MFA which will be called as the undo function of this step. Optional.


