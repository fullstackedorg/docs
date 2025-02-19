# Using git

[Git](https://git-scm.com) is a powerful versioning tool. FullStacked provides a few `git` simplified functionalities to improve your development flow.

## Cloning a Repository

To clone a project, simply add the `Clone` `http` URL of your git repository. You can notice the `Create` button changing its text to `Clone`.

![BlockNote image](/images/git/cloning.png)

From there, everytime you open this project, it will try to `Pull` the latest changes. You can notice it by the green arrow on the git button.

![BlockNote image](/images/git/pulling.png)

## Pushing Code

After you've made some changes and updates to your codebase, click the git button in the top bar of the Project view.

![BlockNote image](/images/git/button.png)

Changes are calculated and displayed there with a text input for your commit message. You can revert any unwanted changes and when ready, whether commit and/or push to your remote (the push button commits beforehand).

![BlockNote image](/images/git/committing.png)

You can notice code being pushed to your remote by the red arrow on the git button.

![BlockNote image](/images/git/pushing.png)

If your remote repository is unreachable (like if you don't have internet access), only the commit action will be available. You can then `Push` later when your remote is reachable.

![BlockNote image](/images/git/remote-unreachable.png)

## Using Branches

FullStacked Editor has very minimal features for merging and resolving conflicts. Be warned to play it safe with your branching strategies. More feature will be implemented in future developments.

A branches button is available in the git dialog. Click it to access the list of available branches in your repository.

![BlockNote image](/images/git/branches-button.png)

From here, you can see on which branch your are, create a new one and checkout other branches.

![BlockNote image](/images/git/branches.png)

### Remote-only, local-only and deleting branches

![BlockNote image](/images/git/remote-local-branches.png)

*   Branches that has never been checked out are labeled `remote-only`
*   Branches that has never been pushed to remote are labeled `local-only`
*   No label means the branch exists both locally and on remote.

Deleting a branch only deletes the local version of it. While you will lose any local changes, if stuck in some merging mayhem, deleting the branch and re-checking it out can help since it resets the branch to the remote version.

## Managing your authentications

For any private and auth required git, you will be prompt to input your username/password (note that the [GitHub Device Flow](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#device-flow) has be added to the editor, you don't need to manually create a token). If you ever need to edit, delete or create authentications, you can all manage them in the settings view accessible from the Projects view.

![BlockNote image](/images/settings-button.png)

Edit, delete and create new git authentications here. Note that you cannot change passwords. For this purpose, simply delete the authentication and re-run an auth process.

![BlockNote image](/images/git/authentications.png)

The username and email in git authentications are also used for your git global user similarly to

```shellscript
git config --global user.name "you"
git config --global user.email "you@example.com"
```
