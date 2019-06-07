namespace DBClient {
    window.addEventListener("load", init);
    let serverAddress: string = "https://pepsi-maxx.herokuapp.com/";

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("search");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        searchButton.addEventListener("click", search);
        refreshButton.addEventListener("click", refresh);
        
    }

    function insert(_event: Event): void {
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

 //   function searchNummer(_event: Event): void {
 //       let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
 //       let query: string = "command=suche";
 //       query += "&matrikel=" + inputs[3].value;
 //       console.log(query);
 //       sendRequest(query, handleFindResponse);
 //   }

    function search(_event: Event): void {
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=search";
        query += "&matrikel=" + inputs[3].value;
        console.log(query);
        sendRequest(query, handleFindResponse);
}

    function refresh(_event: Event): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
        console.log("hi");
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    } 

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
        //    let responseAsJson: JSON = JSON.parse(xhr.response);
        //    console.log(responseAsJson);
        }
    }
}