using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Example
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestSum()
        {
            Assert.AreEqual(4, Math.Sum(2, 2));
        }
    }
}
