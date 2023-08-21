# React with Rails

This project aims to examplify how to use React with Ruby on Rayl framework.

The content here presented is based almost entirely in
<a href = "https://www.youtube.com/playlist?list=PL6SEI86zExmvbxK9wlG3lfm98PFLxtxvP"> YouTube playlist</a> from APPSIMPACT Academy

## Setup
### Create Project
```
rails new rails7-with-react -j=esbuild
cd rails7-with-react
```
### Add CSSbundling
```
Gemfile
[...]
gem 'cssbundling-rails'
```
### Install Bootstrap
```
rails css:install:bootstrap
```
