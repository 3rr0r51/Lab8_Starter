# Lab 8 - Starter

1) Within a Github actions whenever code is pushed.

It's easier for me to explain why the other 2 aren't ideal. 
We can't run them after all development is done because that would contradict the "iterative testing" that Agile promotes.
Running them locally is probably fine a first ("feel the hate before you automate"), but ultimately, we want to automate testing to speed up development.


2) No. When testing just an individual function, we use unit tests. UI tests are for testing a larger scope.

3) No. I'm assuming that the message feature uses multiple functions. It is a feature that also requires us to test how the functions of a code interact with each other. Things like this should be saved for UI tests.

4) Yes. This can be implemented with a single function (no interaction with other code/function) and is very simple. Unit tests are good for these.