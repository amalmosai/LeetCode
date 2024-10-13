function findJudge(n: number, trust: number[][]): number {
    const graph : { inDegree: number, outDegree: number }[]= new Array(n + 1).fill(0).map(() => ({ inDegree: 0, outDegree: 0 }));
    for (const [ai, bi] of trust) {
        graph[ai].outDegree++;
        graph[bi].inDegree++;
    }
    for (let i = 1; i <= n; i++) {
        if (graph[i].outDegree === 0 && graph[i].inDegree === n - 1) {
            return i; 
        }
    }
    return -1;
};