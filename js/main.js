function getRand(){
                var r = Math.floor(Math.random() * (255 - 0) + 0);
                var g = Math.floor(Math.random() * (255 - 0) + 0);
                var b = Math.floor(Math.random() * (255 - 0) + 0);
                var t = (Math.random() * (1 - 0.6) + 0.6);
                return "rgba(" + r + "," + g + "," + b + "," + t + ")";
            };
            $(document).ready(function(){
                $('.myBg').css("background-color", getRand());
                $.ajax({
                        url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
                        type: "post",
                        dataType: "json",
                        contentType: "application/x-www-form-urlencoded",
                        headers: {"X-Mashape-Key":"lFGaOZ7V1Omshp55qRaUIRiBHwz8p111gH6jsnFvBflEqZdq7C"},
                        success: function(data, status){
                            if(status == "success"){
                                var q = data.quote;
                                var a = data.author;
                                $('#cont').html("<blockquote>" + q + "<cite>" + a + "</cite></blockquote>");
                            }
                            else{
                                var q = "<h1>404 Not Found</h1>";
                                $('#cont').html("<blockquote>" + q + "</blockquote>");
                            }
                        }
                });
                $('#changeColor').click(function(){
                    $.ajax({
                        url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
                        type: "post",
                        dataType: "json",
                        contentType: "application/x-www-form-urlencoded",
                        headers: {"X-Mashape-Key":"lFGaOZ7V1Omshp55qRaUIRiBHwz8p111gH6jsnFvBflEqZdq7C"},
                        success: function(data, status){
                            if(status == "success"){
                                var q = data.quote;
                                var a = data.author;
                                $('#cont').html("<blockquote>" + q + "<cite>" + a + "</cite></blockquote>");
                            }
                            else{
                                var q = "<h1>404 Not Found</h1>";
                                $('#cont').html("<blockquote>" + q + "</blockquote>");
                            }
                        }
                    });
                    $('.myBg').css("background-color", getRand());
                });
            });