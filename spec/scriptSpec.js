describe('moduleExample',function(){


    it('test setName', function(){
        moduleExample.subModule1.setName("Muster");
        expect(moduleExample.subModule1.getName()).toBe("Muster bin im submodule Submodul");
    });


    it('test setFirstname', function(){
        moduleExample.setFirstName("Max");
        expect(moduleExample.getFirstName()).toBe("Max Hauptmodul");
    })

})