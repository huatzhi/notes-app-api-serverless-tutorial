# notes-app-api-serverless-tutorial
Note: http://serverless-stack.com/

todo::add details in README

### SLS_DEBUG
Just in case anyone not familiar with node.js and still want to try SLS_Debug, then get f***ed by Google, 
add this in webpack.config.js right after the process.env.NODE_ENV line
~~~~
process.env.SLS_DEBUG = '*';
~~~~

What it does is to add the SLS_DEBUG as environment variable into your nodejs. 
I do not know this is the most correct way to do it tho, but it work.


### 502 - Bad Gateway - Internal Server Error
(This one probably is pretty temporally)<br>
Serverless @1.18.0 break it. Use @1.17.0 instead.

src: https://github.com/AnomalyInnovations/serverless-stack-com/issues/112#issuecomment-317217381 <br>
src: https://github.com/serverless/serverless/issues/3972