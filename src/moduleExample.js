var moduleExample = (function () {

    var privateVar = 'm',
        privateVar2,
        publicVar = "publicVar";

    function init(opt) {
        console.log(opt);
    }

    function addExclamations() {
        privateVar = privateVar + '!!!';
    }

    function setName(strName) {
        privateVar = strName;
    }

    function getName() {
        addExclamations();
        return privateVar;
    }

    function setFirstName(strName) {
        privateVar2 = strName;
    }

    function getFirstName() {
        return privateVar2 + ' Hauptmodul';
    }


    // Reveal public pointers to
    // private functions and properties
    return {
        init: init,
        setName: setName,
        greeting: publicVar,
        getName: getName,
        getFirstName: getFirstName,
        setFirstName: setFirstName
    };

})();


moduleExample.subModule1 = (function (res) {

    var name = res.getName();

    res.getName = function () {
        return name + ' bin im submodule';
    }


    function setName(strName) {
        name = strName;
    }

    function getName() {
        return moduleExample.getName() + ' Submodul';
    }

    return {
        setName: setName,
        getName: getName,
        res: res
    };
}(moduleExample));


