# Using GIT

[GIT](https://git-scm.com) is a powerful versioning tool. 
The FullStacked Editor provides a few simplified functionalities to develop and share your projects.

## Cloning a Repository

To clone a project, simply add the `Clone` URL of your GIT repository in the right field.
You can notice the `Create` button changing its text to `Clone`. 

![GIT Cloning](images/git/cloning.png)

From there, everytime you open this project, it will try to `Pull` the latest changes.
You can notice it by the green arrow on the GIT button.

![GIT Pulling](images/git/pulling.png)

## Pushing Code

Pushing code is pretty straight-forward. 
Click the GIT button in the top bar of the Project view.
Changes are calculated and displayed there with a text input for your commit message.
When ready, whether commit and/or push to your remote (the push button commits beforehand). 

![GIT Committing](images/git/committing.png)

When code is being push to your remote, you can notice it by the red arrow on the GIT button.

![GIT Pushing](images/git/pushing.png)

If your remote repository is unreachable like if you do not have internet access,
only the commit action will be available. 
You can then `Push` later when your remote is reachable.

![GIT Unreachable Error](images/git/remote-unreachable.png)

## Using Branches

> FullStacked Editor has very minimal features for merging and resolving conflicts.
> Be warned to play it safe with your branching strategies.
> More feature will be implemented in future developments.

A branches button is available in the GIT dialog.
Click it to access the list of available branches in your repository.

![GIT Branches Button](images/git/branches-button.png)

From here, you can see on which branch your are, create a new one and checkout other branches.

![GIT Branches](images/git/branches.png)

## Managing your authentications

For any private and auth required GIT, you will be prompted to input your username/password
(note that the [GitHub Device Flow](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#device-flow) has be implemented.)
If you ever need to edit, delete or create new one, you can all manage them in the settings view accessible from the Projects view.

![Settings Button](images/settings-button.png)

Edit, delete and create new GIT authentications here.
Note that you cannot change passwords. 
For this purpose, simply delete the authentication and re-run an auth process. 

![GIT Authentications](images/git/authentications.png)

The username and email is used for your GIT global user similarly to 
```shell
git config --global user.name "you"
git config --global user.email "you@example.com"
```

