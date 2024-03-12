1. Clone the project into your local machine
2. Open the project on VS code and run "npm i" in the VS code terminal

3. Here are the following ways and terminal codes you can use to run the tests

	3.1 : npx playwright test tests - run all the tests in the projects in headless mode parallelly
	3.2 : npx playwright test --workers=1 - run all the tests in the project in headless mode, one test after the other [not like the above test run]
	3.3 : npx playwright test --headed - To run your tests in headed mode

4. View test results, reports and SSs by running : npx playwright show-report


THINGS TO NOTE :
- I have disabled "headed" mode from the config file
- The tests run on all three browsers [chromium,firefox,webkit]
- All cases that have a screenshot enabled for test passes can be found in the "test_ss" folder
- All fail cases will have screenshot and can be viewed in the "test-results" folder or the playwright report.

-   2 failed
    [webkit] › drag_and_drop.spec.ts:24:1 › Dragging A to B ────────────────────────────────────────
    [webkit] › drag_and_drop.spec.ts:33:1 › Dragging B to A 
The above to cases will always fail on webkit as its a bug that requires development work.