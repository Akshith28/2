class Form{
    constructor(){}

    display() {
        var title = createElement("h2");
        title.html("Survey");
        title.position(180,0);
        var input = createInput("Mail-id");
        var button = createButton("Submit");
        input.position(130,160);
        button.position(270,200);
        button.mousePressed(function() {
            input.hide();
            button.hide();
            var email = input.value();
            vote.update(email);
           
        });
    }
}