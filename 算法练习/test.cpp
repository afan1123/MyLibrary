int result[3] = {0, 1, 1};
int Fibonacci1(unsigned n)
{
    if (n < 3)
    {
        return result[n];
    }
    return Fibonacci1(n - 1) + Fibonacci1(n - 2);
}