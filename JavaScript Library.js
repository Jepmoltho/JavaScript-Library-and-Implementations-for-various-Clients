/**
 * @Client Function Library
 *
 * You can invoke any function in this library on any page in a client's solution.
 * Use theese functions to extend the functionality of MooD.
 *
 * @desc - Description of function
 * @param - The parameter (typically a class name generated by MooD) that you inject into the function to get the desired element.
 * @returns - What the function returns
 * @example - Example of input / output of incoking function
 *
 * Standards using the library:
 *
 * 1) Interactive elements (buttons, textfields etc.) should be hidden by default
 * 2) Use a <style> tag to set CSS properties of an interactive element to hidden in the top of your script
 * 3) Save state variables and DOM elements to variables in the beginning of your functions using getter methods from the library
 * 4) Manipulate those variables in the function logic - this increases readability and makes it easier to debug
 * 5) Call variable names something meaningfull - comments to code are welcome, but should not be nessesary
 * 6) Do not invoke functions in the library file. You only invoke functions from the library on pages locally.
 */

/******************** GETTER FUNCTIONS *************************/

/**
 * @desc - Get a HTML element from the DOM
 * @param {String} - Class name of the element
 * @returns {HTML} - The HTML element
 */
function ssGetElement(className) {
  if (ssExists(className)) {
    return document.querySelector(".mood-node-name-" + className);
  }
  return null;
}

/**
 * @desc - Get a collection of HTML element from the DOM
 * @param {String} - Class name of the elements
 * @returns {Array} - An array of matching HTML elements
 */
function ssGetAllElements(className) {
  if (ssExists(className)) {
    return document.querySelectorAll(".mood-node-name-" + className);
  }
  return null;
}

/**
 * @desc - Get an element from the DOM not injected by MooD or one that doesn't have mood-node-name-class-name as it's class name
 * @param {String} - Class name of the element
 * @returns {HTLM} - The HTML element
 */
function ssGetNonMoodElement(className) {
  if (ssNoneMoodElementExists(className)) {
    return document.querySelector("." + className);
  }
  return null;
}

/**
 * @desc - Get the value of the text wrapped by an HTML element (what is visible to the user)
 * @param {String} - Name of the element
 * @returns {String} - The innerText of the element (what is visible to the user)
 */
function ssGetInnerText(className) {
  if (ssExists(className)) {
    return document
      .querySelector(".mood-node-name-" + className)
      .innerText.trim();
  }
  return null;
}

/**
 * @desc - Get the length of a text in an element as number of characters. Can be used to evaluate if an element is empty.
 * @param {String} - Name of the element
 * @returns {String} - Length of the innerText of the element (number of characters)
 */
function ssGetInnerTextLength(className) {
  if (ssExists(className)) {
    return document
      .querySelector(".mood-node-name-" + className)
      .innerText.trim().length;
  }
  return null;
}

/**
 * @desc - Get the textContent property of an element. Sometomes MooD doesn't set text as innerText, but instead with the textContent property. In that case, use this function.
 * @param {String} - Name of the element
 * @returns {String} - The textContent property of an element
 */
function ssGetTextContent(className) {
  if (ssExists(className)) {
    return document
      .querySelector(".mood-node-name-" + className)
      .textContent.trim();
  }
  return null;
}

/**
 * @desc - Get the innerHTML of an element
 * @param {String} - Name of the element
 * @returns {HTML/String} - The innerHTML of an element as a String
 */
function ssGetHTML(className) {
  if (ssExists(className)) {
    return document.querySelector(".mood-node-name-" + className).innerHTML;
  }
  return null;
}

/**
 * @desc - Get the value of a MooD generated infopanel
 * @param {String} - Name of the element
 * @returns {String} - Name in the infopanel
 */
function ssInfopanelValue(name) {
  if ($(".mood-node-name-" + name).length > 0)
    return $(".mood-node-name-" + name)
      .text()
      .trim();
  return 0;
}

/**
 * @desc - Get a tab as an HTML element
 * @param {String} - Name of the tab
 * @returns {HTML} - The HTML of the Tab
 */
function ssGetTab(className) {
  return Array.from(document.querySelectorAll("li")).find(
    (el) => el.textContent === className
  );
}

function ssGetElementsByTagName(className) {
  return document.getElementsByTagName(className);
}

/**
 * @desc - Check if an element exists. This method handles errors in case you target an element that doesn't exist.
 * @param {String} - Name of the element
 * @returns {Boolean} - If an element exists or not TRUE/FALSE
 */
function ssExists(className) {
  if (document.querySelector(".mood-node-name-" + className)) {
    return true;
  }
  return false;
}

/**
 * @desc - WIP: Check if a tab exists. This method handles errors in case you target a tab that doesn't exist.
 * @param {String} - Name of the element
 * @returns {Boolean} - If an element exists or not TRUE/FALSE
 */
function ssExistsTab(className) {
  if (
    Array.from(document.querySelectorAll("li")).find(
      (el) => el.textContent === className
    ).textContent == className
  ) {
    return true;
  }
  return false;
}

/**
 * @desc - Check if elements not generated by MooD exists. This method handles errors in case you target a tab that doesn't exist.
 * @param {String} - Name of the element
 * @returns {Boolean} - If an element exists or not TRUE/FALSE
 */
function ssNoneMoodElementExists(className) {
  if (document.querySelector("." + className)) {
    return true;
  }
  return false;
}

/**
 * @desc - Check if any of selected values of radiobuttons are == value
 * @param {String} - Value to be checked example "Yes". Mood chosen classname of selected radiobuttons example "dx-list-item-selected"
 * @returns {Boolean} - If value exists in radio buttons
 */
function ssCheckRadioButtonValues(value, className, index) {
  var radioButtons = document.getElementsByClassName(className);
  for (i = index; i < radioButtons.length; i++) {
    if (radioButtons[i].innerText == value) {
      return true;
    }
  }
  return false;
}

/**
 * @desc -  Checks if an inut field is a certain length of characters
 * @param {String} className - Name of the element
 * @param {String} childtag - The tag the input is wrapped in
 * @param {Int} length - Length of characters to check for
 * @returns {Boolean} True if specified length of the input text field equeals the input length given in the paramenter
 */
function ssValidateInputLength(className, childtag, length) {
  if (ssExists(className)) {
    var childnode = document
      .getElementsByClassName("mood-node-name-" + className)[0]
      .getElementsByTagName(childtag)[0];
    var childnodeLength = childnode.value.length;
    if (childnodeLength == length) {
      return true;
    } else {
      return false;
    }
  } else {
    return null;
  }
}

/**
 * @desc - If you don't know how to grap an element without jquery, do it using this function
 * @param {String} query - Name of the element
 * @returns {*} - Whatever element/value in the DOM you are grapping
 */
function ssGetElementsFromJquery(query) {
  return $(query);
}

/**
 * @desc - If you don't know how to count a collection of elements without jquery, do it using this function
 * @param {String} query - If you don't know how to grap the number of elements without jquery, do it using this function
 * @returns {*} - Whatever length of element in the DOM you are grapping
 */
function ssGetElementsLengthFromJquery(query) {
  return $(query).length;
}

/**
 * @desc - Get the value attribute of an element with text input
 * @param {String} className - Name of the element
 * @returns
 */
function ssGetValueAttribute(className) {
  if (ssExists(className)) {
    return document.querySelector(".mood-node-name-" + className + " input")
      .value;
  } else {
    return null;
  }
}

/**
 * @desc - Get the value (title attribute) of an element selected using the Multi Select Dropdown
 * @param {String} className - Name of the element
 * @returns {String} - The selected value of the dropdown
 */
function ssGetValueFromMultiSelectDropdown(className) {
  if (ssExists(className)) {
    return ssGetElement(
      className + " .dx-texteditor.dx-texteditor-empty.dx-widget.dx-textbox"
    ).getAttribute("title");
  } else {
    return false;
  }
}

/******************** SETTER FUNCTIONS *************************/

/**
 * @desc - Hide an element
 * @param {STRING} - Name of the element
 */
function ssHide(className) {
  if (ssExists(className)) {
    document.querySelector(".mood-node-name-" + className).style.visibility =
      "hidden";
  } else {
    return null;
  }
}

/**
 * @desc - Hide multiple elements
 * @param {Array} - Array of elements
 */
function ssHideMultipleElements(array) {
  array.forEach((element) => {
    element.style.visibility = "hidden";
  });
}

/**
 * @desc - Display a hidden element
 * @param {STRING} - Name of the element
 */
function ssShow(className) {
  if (ssExists(className)) {
    document.querySelector(".mood-node-name-" + className).style.visibility =
      "visible";
  } else {
    return null;
  }
}

/**
 * @desc - Show multiple elements
 * @param {Array} - Array of elements
 */
function ssShowMultipleElements(array) {
  array.forEach((element) => {
    element.style.visibility = "visible";
  });
}

/**
 * @desc - Remove an element from the DOM. Use this if you want to be able to target the element in the DOM, but want it to be invisible and not take up space from other elements.
 * @param {String} - Name of the element
 */
function ssRemove(className) {
  if (ssExists(className)) {
    document.querySelector(".mood-node-name-" + className).style.display =
      "none";
  } else {
    return null;
  }
}

/**
 * @desc - Return an element you removed from the DOM.
 * @param {STRING} - Name of the element
 */
function ssCreate(className) {
  if (ssExists(className)) {
    document.querySelector(".mood-node-name-" + className).style.display =
      "block";
  } else {
    return null;
  }
}

/**
 * @desc - Destroy target element. It can't be regenerated.
 * @param {STRING} - Name of the element
 */
function ssKill(className) {
  if (ssExists(className)) {
    document.querySelector(".mood-node-name-" + className).remove();
  } else {
    return null;
  }
}

/**
 * @desc - Sets the innerText of an element (text visible to the user)
 * @param {String} - Name of the element
 */
function ssSetInnerText(className) {
  if (ssExists(className)) {
    document.querySelector(".mood-node-name-" + className).innerText =
      className;
  } else {
    return null;
  }
}

/**
 * @desc - Sets the textContent of an element, in case the element visible text is not displaayed as innerText (text visible to the user)
 * @param {String} - Name of the element
 */
function ssSetTextContent(className) {
  if (ssExists(className)) {
    document.querySelector(".mood-node-name-" + className).textContent =
      className;
  } else {
    return null;
  }
}

/**
 * @desc - Add an "explanation-text/tooltip" to an element, that will display when the cursor hover overs it
 * @param {String} - Name of the element
 * @param {String} - The text to be displayed. This can be a long text.
 * @param {String} - Top position in pixels example "0px" or "-150px" or "150px"
 * @param {String} - Left position in pixels example "0px" or "-150px" or "150px"
 */
function ssAddToolTip(className, toolTipText, top, left) {
  if (ssExists(className)) {
    ssGetElement(className).classList.add("tooltip-parent");
    ssGetElement(className).innerHTML +=
      '<span class="tooltiptext ' +
      "tooltip-" +
      className +
      '">' +
      toolTipText +
      "</span>";
    var toolTipElement = ssGetNonMoodElement("tooltip-" + className);
    toolTipElement.style.top = top;
    toolTipElement.style.left = left;
  } else {
    return null;
  }
}

/**
 * @desc - Disable an element
 * @param {String} className - The name of the element to disable
 */
function ssDisableElement(className) {
  if (ssExists(className)) {
    ssGetElement(className).style.opacity = 0.5;
    ssGetElement(className).style.pointerEvents = "none";
  } else {
    return null;
  }
}

/**
 * @desc - Enable an element that has been disabled
 * @param {String} className - The name of the element to disable
 */
function ssEnableElement(className) {
  if (ssExists(className)) {
    ssGetElement(className).style.opacity = 1;
    ssGetElement(className).style.pointerEvents = "";
  } else {
    return null;
  }
}

/**
 * @desc - Set the input value of a textfield
 * @param {String} className - The name of the element to disable
 * @param {String} className - The text to set the
 */
function ssSetValueAttribute(className, value) {
  if (ssExists(className)) {
    document.querySelector(".mood-node-name-" + className + " input").value =
      value;
  } else {
    return null;
  }
}

/**
 * @desc - Hide an element only in selected environments
 * @param {String} environmentURL - Part of the URL in where the element should be hidden
 * @param {String} className - The name of the element to hide
 */
function ssHideElementInEnvironment(environmentURL, className) {
  if (window.location.href.includes(environmentURL)) {
    document.querySelector(".mood-node-name-" + className).remove();
  } else {
    return null;
  }
}

/**
 * @param {String} - The color in RGB format example "rgb(0,163,164)"
 */
function ssColorAsRGB(colorAsRGB) {
  $("#layout").css("background-color", colorAsRGB);
}

//Color cell by title
function ssColorCell(matrixClass, item, color) {
  $("." + matrixClass + " td img[title='" + item + "']")
    .parent()
    .css("background-color", color);
}

//Read ticklist matrix and turn tooltips into list of string values
function ssMatrixValuesToList(matrixClass) {
  let imgs = $("." + matrixClass + " td img"); //Grabs all img element within that class
  let list = [];

  for (i = 0; i < imgs.length; i++) {
    list.push(imgs[i].getAttribute("title"));
  }

  return list;
}

//Match all elements in childClass with parentClass color accordingly.
function ssValidateMatrixWithcolor(parentClass, childClass) {
  //Inject proper class names into all cells upon start
  let cellLenght = document.getElementsByTagName("td").length;
  for (i = 0; i < cellLenght; i++) {
    //Return only cells with children that has an alt attribute && title attrute == "Tick"
    if (
      document.getElementsByTagName("td")[i].children.length != 0 &&
      document.getElementsByTagName("td")[i].children[0].getAttribute("alt") ==
        "Tick" &&
      document
        .getElementsByTagName("td")
        [i].children[0].getAttribute("title") == "Tick"
    ) {
      //Add title to the parent element (td) which is the text contained in td
      document
        .getElementsByTagName("td")
        [i].setAttribute(
          "title",
          "Row: " +
            document
              .getElementsByTagName("td")
              [i].parentElement.textContent.toString()
              .trim() +
            "\r\nColumn: " +
            document
              .getElementsByClassName(parentClass)[1]
              .getElementsByClassName("VertColHeadingInnerDiv")[
              document.getElementsByTagName("td")[i].cellIndex - 1
            ].textContent
        );
      //Add title to the child element (img) which is the text contained in the parent element (td)
      document
        .getElementsByTagName("td")
        [i].children[0].setAttribute(
          "title",
          "Row: " +
            document
              .getElementsByTagName("td")
              [i].parentElement.textContent.toString()
              .trim() +
            "\r\nColumn: " +
            document
              .getElementsByClassName(parentClass)[1]
              .getElementsByClassName("VertColHeadingInnerDiv")[
              document.getElementsByTagName("td")[i].cellIndex - 1
            ].textContent
        );
    }
    //Set background color of empty cells to white
    if (
      document.getElementsByTagName("td")[i].children.length < 1 &&
      document.getElementsByTagName("td")[i].id.includes("yui-gen")
    ) {
      document
        .getElementsByTagName("td")
        [i].style.setProperty("background-color", "white");
    }
  }

  parentList = matrixValuesToList(parentClass);
  childList = matrixValuesToList(childClass);

  for (i = 0; i < childList.length; i++) {
    if (parentList.includes(childList[i]))
      ssColorCell(childClass, childList[i], "green");
    else ssColorCell(childClass, childList[i], "red");
  }
}
