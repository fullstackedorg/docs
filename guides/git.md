# Using git

[Git](https://git-scm.com) is a powerful versioning tool. 
The FullStacked Editor provides a few `git` simplified functionalities to improve your development flow.

## Cloning a Repository

To clone a project, simply add the `Clone` URL of your git repository in the right field.
You can notice the `Create` button changing its text to `Clone`. 

![git Cloning](images/git/cloning.png)

From there, everytime you open this project, it will try to `Pull` the latest changes.
You can notice it by the green arrow on the git button.

![git Pulling](images/git/pulling.png)

## Pushing Code

Pushing code is pretty straight-forward. 
Click the git button in the top bar of the Project view.

![git Button](images/git/button.png)

Changes are calculated and displayed there with a text input for your commit message.
When ready, whether commit and/or push to your remote (the push button commits beforehand). 

![git Committing](images/git/committing.png)

You can notice code being pushed to your remote by the red arrow on the git button.

![git Pushing](images/git/pushing.png)

If your remote repository is unreachable (like if you don't have internet access),
only the commit action will be available. 
You can then `Push` later when your remote is reachable.

![git Unreachable Error](images/git/remote-unreachable.png)

## Using Branches

> FullStacked Editor has very minimal features for merging and resolving conflicts.
> Be warned to play it safe with your branching strategies.
> More feature will be implemented in future developments.

A branches button is available in the git dialog.
Click it to access the list of available branches in your repository.

![git Branches Button](images/git/branches-button.png)

From here, you can see on which branch your are, create a new one and checkout other branches.

![git Branches](images/git/branches.png)

### Remote-only, local-only and deleting branches

* Branches that has never been checked out are labeled `remote-only`
* Branches that has never been pushed to remote are labeled `local-only`
* No label means the branch exists both locally and on remote.

Deleting a branch only deletes the local version of it. 
While you will lose any local changes, if stuck in some merging mayhem,
deleting the branch and re-checking it out can help since it resets the branch to the remote version.

## Managing your authentications

For any private and auth required git, you will be prompt to input your username/password
(note that the [gitHub Device Flow](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#device-flow) has be implemented).
If you ever need to edit, delete or create authentications, you can all manage them in the settings view accessible from the Projects view.

![Settings Button](images/settings-button.png)

Edit, delete and create new git authentications here.
Note that you cannot change passwords. 
For this purpose, simply delete the authentication and re-run an auth process. 

![git Authentications](images/git/authentications.png)

The username and email is used for your git global user similarly to 

```shell
git config --global user.name "you"
git config --global user.email "you@example.com"
```

