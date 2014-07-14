# XD Bonus Calculator

> Using [generator-assemble](https://github.com/assemble/generator-assemble) and [Atomic design](http://bradfrostweb.com/blog/post/atomic-web-design/) together

## The Goals

This project was started in order to figure out how to use one of the more popular (don't quote me on that) build tools, and also figure out how to start using Atomic design principles in my development.

* Proficiency (Perficientsy) in a FE build tool
* Learn handlebars.js
* Code using atoms, molecules and organisms

## The File Structure

```sh
> content
    Markdown files are put here. Richtext content for pages.
> data
    JSON or YAML files.
> templates
    > layouts
        Your base page structures.
    > pages
        In Atomic terms, these are actually "layouts" (in this case).
    > partials
        > molecules
            The main code of the site.
        > organisms
            Putting together molecules, and adding any additional code needed.
```