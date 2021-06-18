//META{"name":"ExampleLibraryPlugin"}*//
function logger(a) {
    console.log(a);
}

var elmname = document.getElementById("positionLayer-1KzSAt layer-v9HyYc");

class ExampleLibraryPlugin {
    getName() { return "aaa"; }
    getDescription() { return "Does things with the library"; }
    getVersion() { return "0.0.1"; }
    getAuthor() { return "Sleepi"; }
    load() {
    }
    start() {
    }

    stop() {
    }
    observer(changes) {
        document.querySelectorAll('[role="gridcell"]').forEach(function (el) {
            el.classList.remove("emojiItemDisabled-1FvFuF");
        });
    }
}