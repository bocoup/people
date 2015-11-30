# Nest People

## Dependencies

The following will need to be installed on your local development machine before
you can use this workflow. All versions should be the latest available, as some
required features may not be available in older versions.

* **[Ansible](http://docs.ansible.com/) ^1.9.4**
	- Install `ansible` via apt (Ubuntu), yum (Fedora), [homebrew][homebrew] (OS
		X), etc. See the [Ansible installation
		instructions](http://docs.ansible.com/intro_installation.html) for detailed,
		platform-specific information.
* **[VirtualBox](https://www.virtualbox.org/)**
	- [Download](https://www.virtualbox.org/wiki/Downloads) (All platforms)
	- Install `virtualbox` via [homebrew cask][cask] (OS X)
* **[Vagrant](https://www.vagrantup.com/) ^1.7.4**
	- [Download](http://docs.vagrantup.com/v2/installation/) (All platforms)
	- Install `vagrant` via [homebrew cask][cask] (OS X)
* **[vagrant-hostsupdater](https://github.com/cogitatio/vagrant-hostsupdater)**
	- Install with `vagrant plugin install vagrant-hostsupdater` (All platforms)
* **[node.js ^4.2.1 or ^5.0.0](https://nodejs.org/)**
	- [Download](https://nodejs.org/) (All platforms)
	- Install `node` via [homebrew][homebrew]
* **[grunt-cli](https://github.com/gruntjs/grunt-cli)**
	- Install with `npm install -g grunt-cli`
	- Alternatively, call grunt from `./node_modules/.bin/grunt`

[homebrew]: http://brew.sh/
[cask]: http://caskroom.io/

## Development

1. Run `npm install` to install local dependencies.
1. Run `vagrant up` to start the Vagrant box.
	- If you had previously [test-deployed a local
	 commit](#test-deploying-a-local-commit-vagrant) (see below), run
	 `./deploy/run-playbook.sh vagrant-link vagrant`.
1. Run `grunt` to build the site into `public` to start the file-watcher
	 and the live-reload process.
	1. Browse to <http://people.loc/>
	1. Edit files in `src` and see the webpage update automatically.
1. Run `npm test` if you only want to run lint and tests, without the watch task

Note that after changes to `Gruntfile.js` or any of the Grunt-related files in
the `grunt` directory, `grunt` will need to be restarted.

## Testing the build process

1. Run `grunt build` to build the site into `public`.
1. If you had previously [test-deployed a local
	 commit](#test-deploying-a-local-commit-vagrant) (see below), run
	 `./deploy/run-playbook.sh vagrant-link vagrant`.
1. Browse to <http://people.loc/>
1. Re-build and refresh the browser to see changes.

## Continuous Deployment

Merging to `production` will automatically trigger a deploy to people.bocoup.com, and merging to `master` will deploy to people-staging.bocoup.com.

In the (hopefully) rare instance you need to manually deploy the steps are below.

## Manual Deployment

### Test-deploying a local commit (Vagrant)

1. Run `./deploy/run-playbook.sh deploy vagrant local=true commit=_____` where
	 `_____` is the local commit ref (branchname, SHA, etc) to deploy. For a
	 complete list of options, see the [deploy role docs][deploy].
	 * Simulate deploying to production or staging by adding `env=production` or
		 `env=staging` to the end of this command.
1. Browse to <http://people.loc/>

[deploy]: https://deployment-workflow.bocoup.com/#deploy-role

### Deploying to staging

1. Run `./deploy/run-playbook.sh deploy staging commit=_____` where `_____` is
	 the commit ref (branchname, SHA, etc) in GitHub. For a complete list of
	 options, see the [deploy role docs][deploy].
1. Enter your [dploy][dploy] sudo password when asked.

### Deploying to production

1. Run `./deploy/run-playbook.sh deploy production commit=_____` where `_____`
	 is the commit ref (branchname, SHA, etc) in GitHub. For a complete list of
	 options, see the [deploy role docs][deploy].
1. Enter your [dploy][dploy] sudo password when asked.

[dploy]: https://github.com/bocoup/infrastructure/blob/master/ansible/group_vars/all.yml

### Running specific Ansible playbooks

#### Configuration

* [deploy/ansible/group_vars/all.yml][all] - Global variables. These settings
	are available to all playbooks and roles.

[all]: deploy/ansible/group_vars/all.yml

#### Playbooks and Roles:

* [provision](deploy/ansible/provision.yml) - Install all dependencies required
	to build the base box.
	* [base](deploy/ansible/roles/base) role - Install Apt packages.
* [configure](deploy/ansible/configure.yml) - Configure the box and get services
	set up. _The following roles may be run individually via a role-named tag, eg.
	`--tags=nginx`:_
	* [configure](deploy/ansible/roles/configure) role - Basic server
		configuration.
	* [nginx](deploy/ansible/roles/nginx) role - Enable SSL (if specified) and
		configure nginx.
* [vagrant-link](deploy/ansible/vagrant-link.yml) - Link local working project
	directory into the Vagrant box so local changes can be previewed on the
	server. This playbook overrides the `deploy` playbook, and vice-versa.
* [deploy](deploy/ansible/deploy.yml) - Deploy the specified commit to the
	server and run the project build. For a complete list of options, see the
	[deploy role docs][deploy].
	documentation](https://deployment-workflow.bocoup.com/#deploy-role) for an
	explanation of the available options.
* [init](deploy/ansible/init.yml) - Run `provision`, `configure` and
	`vagrant-link` playbooks. Runs on `vagrant up`.

#### Examples:

Note: more information is available on the [Modern Web Deployment
Workflow](https://deployment-workflow.bocoup.com/#deploying) website.

```bash
# Run all configure playbook roles:

$ ./deploy/run-playbook.sh configure vagrant


# Run configure playbook role tagged "nginx":
# (valid tags are: configure, users, nginx)

$ ./deploy/run-playbook.sh configure vagrant --tags=nginx


# Deploy local branch "my-feature" to Vagrant for testing:

$ ./deploy/run-playbook.sh deploy vagrant local=true commit=my-feature


# Deploy branch "my-feature" from GitHub to staging:

$ ./deploy/run-playbook.sh deploy staging commit=my-feature


# Deploy master to production:

$ ./deploy/run-playbook.sh deploy production
```

### After Deploying

You can see what version is deployed using this url or one like it:

`https://people.bocoup.com/assets/build.txt`

## Configuration

### API Root

The API urls are configured in `/src/config.js`. These URLs are based the
value of the `APP_ENV` environment variable, and defaults to that of the
`development` environment. This file should only need to be changed if the
location of the API changes.

### Authentication Providers

The list of authentication providers is set in `/src/config.js`. These
are the providers a user can choose to authenticate with. Currently, the Bocoup
API only supports GitHub authentication.
