isInViewport
============

JQuery plug-in to check if an HTML element is in the viewport (vertical)

### Requirements
- Be sure to have the ``<!DOCTYPE html>`` at the beginning of your HTML document
- Link your page to JQuery library: ``<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>``
- Download bravo.jquery.isInViewport.js and add it to your project's directory
- Link your page to bravo.jquery.isInViewport.js ``<script src="[your path]bravo.jquery.isInViewport.js"></script>``

### Usage
```javascript
$('#some-element').isInViewport(); //returns true if the element is inside the viewport
```

### isInViewport(options)
- **mode** (default: _middle_)
  - Type: string
  - Possible values: 'top', 'middle', 'bottom'
  - Determines whether the HTML element is in the viewport if its top, middle, or bottom is in the viewport

```javascript
  $('#some-element').isInViewport({mode: 'bottom'});
```

- **offset** (default: _0_)
  - Type: integer
  - Possible values: any natural number
  - Adds a vertical buffer to the HTML element

```javascript
  $('#some-element').isInViewport({offset: 47});
  $('#some-element').isInViewport({ mode: 'top', 
                                    offset: 100});
```

### Example

- http://codepen.io/BrianBravo/pen/jfsDG


### License
- MIT License (http://opensource.org/licenses/MIT)


### Version
- 0.9.1


### Feedback
- Let me know if you find anything I can improve :)
