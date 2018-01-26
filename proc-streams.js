process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
    process.stdout.write('Data! -> ' + chunk);
});

process.stdin.on('end', function() {
    process.stderr.write('End!\n');     // Ctrl + D
});

process.on('SIGTERM', function() {
    process.stderr.write("Why are you trying to terminate me?");    // win: taskkill /pid 10216 /f
                                                                    // lin: kill -TERM 10216
});

console.log("Node is running as process #" + process.pid);
