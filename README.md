<a name="readme-top"></a>

<br />
<div align="center">
    <a href="https://github.com/Deepwatchinc/SUI-zero-to-splunkbase-example">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset=".github/images/logo-dark.png">
            <source media="(prefers-color-scheme: light)" srcset=".github/images/logo-light.png">
            <img alt="Logo" src=".github/images/logo-light.png">
        </picture>
    </a>
    <h3 align="center">THE2818 Splunk UI: From Zero to Splunkbase</h3>
    <p align="center">Sample Splunk UI App</p>
</div>

## About The Project

This project is a companion to the Splunk .conf 2024 Builder Bar Theater Session and contains the core files and structure of a Splunk UI app. Step by step instructions, running commands, and links to resources can be referenced in this README.

This project contains a variety of packages that are published and versioned collectively. Each package lives in its own directory in the `/packages` directory. Each package is self contained, and defines its dependencies in a `package.json` file.

We use [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) and [Lerna](https://github.com/lerna/lerna) for managing and publishing multiple packages in the same repository.

### Built With

[![React][React.js]][React-url]

## Getting Set Up

1. Clone this repo
2. Ensure you have Docker installed on your workstation
3. (Optional) Ensure you have the Microsoft Dev Containers and Docker extensions installed in VS Code. The Dev Containers extension allows you to perform development work without installing Yarn or Node directly on your workstation
4. Install yarn (>= 1.2) if you haven't already: `npm install --global yarn`

## Setting Up the Build Environment

1. On the bottom left corner of the VS Code window, click on the green Remove Window button and select "Reopen in container"
2. This step will take a few moments and when complete, it will reopen the VS Code window into the Dev Container
3. Run the setup task: `yarn run setup`. You should only need to run this once unless there are significant JavaScript dependency changes

Now that the environment has been set up, you can run the following tasks (note: `yarn run setup` is needed before continuing):

* `start` – Run the `start` task for each project
* `build` – Create a production bundle for all projects
* `test` – Run unit tests for each project
* `lint` – Run JS and CSS linters for each project
* `format` – Run prettier to auto-format `*.js`, `*.jsx` and `*.css` files. This command will overwrite files without
asking, `format:verify` will not

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Docker-Splunk Testing

A `docker-compose.yml` file is included with this project to aid in testing the app. 

1. Ensure you have Docker installed
2. Create the Docker container (specifying the Splunk password here allows us to avoid hardcoding it in the `docker-compose.yml` file):
```
SPLUNK_PASSWORD=<insert_password> docker-compose up
```
3. Run `yarn run start` to start a live build to track changes
4. Open Splunk in your browser: [Splunk Docker Container](http://localhost:8000/en-US/)
5. Stop the Docker container when no longer needed

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## AppInspect Testing

AppInspect is a tool used to test and validate the quality of your Splunk app. Receiving a passing score from AppInspect is required in order to upload your app to Splunkbase.

Requirements for testing your app:
* A Splunk user and password to log into the AppInspect API
* A `tar.gz` package of your app
* A list of tags to include for testing ("cloud" must be used for Splunk Cloud)

### Testing locally

If testing locally using AppInspect REST endpoints, follow the steps here [Use the Splunk AppInspect API](https://dev.splunk.com/enterprise/docs/developapps/testvalidate/appinspect/useappinspectapi/)

### Testing using Github Actions

If testing your app using Github Actions, a sample workflow is provided in this project: `.github/workflows/build-test.yml`. Add your Splunk user and password as Repository secrets.

This workflow performs two jobs: `build` and `appinspect`. The steps performed are simple:
1. Checkout the code in the project
2. Build the app using `yarn run setup` and `yarn run package`
3. Upload the `tar.gz` package as an artifact (you can download this later to submit it on Splunkbase)
4. Download the artifact (for the appinspect job)
5. Use the `splunk/appinspect-api-action` Github Action and provide the names of the Repository secrets you set up earlier. (Example: `${{ secrets.USER }}` and `${{ secrets.PASSWORD }}`)
6. Download the AppInspect results in an HTML report `AppInspect_response.html`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Developer Scripts

Commands run from the root directory will be applied to all packages. This is handy when working on multiple packages simultaneously. Commands can also be run from individual packages. This may be better for performance and reporting when only working on a single package. All of the packages have similar developer scripts, but not all scripts are implemented for every package. See the `package.json` of the package in question to see which scripts are available there.

For more granular control of development scripts, consider using [Lerna](https://github.com/lerna/lerna) directly.

## Code Formatting

SuiSampleApp uses [prettier](https://github.com/prettier/prettier) to ensure consistent code formatting. It is recommended to [add a prettier plugin to your editor/IDE](https://github.com/prettier/prettier#editor-integration).

## Resources

* [@splunk/create](https://splunkui.splunk.com/Packages/create/Overview)
* [@splunk/react-ui](https://splunkui.splunk.com/Packages/react-ui/Overview)
* [Docker-Splunk](https://splunk.github.io/docker-splunk/)
* [Developing inside a Container](https://code.visualstudio.com/docs/devcontainers/containers)
* [VS Code Microsoft Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
* [VS Code Microsoft Docker Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
* [Using the Splunk AppInspect API](https://dev.splunk.com/enterprise/docs/developapps/testvalidate/appinspect/useappinspectapi/)
* [Inspect an app package](https://dev.splunk.com/enterprise/tutorials/module_validate/inspectapp/)
* [Splunk AppInspect Tag Reference](https://dev.splunk.com/enterprise/reference/appinspect/appinspecttagreference)
* [nivo Components](https://nivo.rocks/components/)

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/