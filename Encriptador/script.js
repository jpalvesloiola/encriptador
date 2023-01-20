function autoResize()
    {
        objTextArea = document.getElementById('msg-criptografa');
        while (objTextArea.scrollHeight > objTextArea.offsetHeight)
        {
            objTextArea.rows += 1;
        }
    }