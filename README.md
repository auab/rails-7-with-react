# React with Rails

This project aims to examplify how to use React with Ruby on Rais framework.

The content here presented is based almost entirely in
<a href = "https://www.youtube.com/playlist?list=PL6SEI86zExmvbxK9wlG3lfm98PFLxtxvP"> YouTube playlist</a> from APPSIMPACT Academy

## Setup
### Create Project
```
Terminal
rails new rails7-with-react -j=esbuild
cd rails7-with-react
```
### Add CSSbundling
```ruby
Gemfile
[...]
gem 'cssbundling-rails'

Terminal
bundle install
```
### Install Bootstrap
```
rails css:install:bootstrap
```

### Install React
```
Terminal
npm install react react-dom
```

### Create a controller
```ruby
Terminal
rails g controller home index

config/routes.rb
root 'home#index'
```

### Create components directory and a initial component
```jsx
javascript/react/src/components/Welcome.jsx

import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

const Welcome = () => {
  return(
    <div className='container'>
      <h1>Hello World!</h1>
      <p>This is the first lecture!</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
    <Welcome />
)

export default Welcome

```

### Create index.js and import component
```js
javascript/react/src/index.js

import Welcome from './components/Welcome'
```

### Import index.js in application.js
```js
javascript/application.js
// import "@hotwired/turbo-rails"
// import "./controllers"

import './react/src/index.js'
import * as bootstrap from "bootstrap"
```

### Modify view to get the component
```html
app/views/home/index.html.erb

<div id="welcome">
</div>
```
