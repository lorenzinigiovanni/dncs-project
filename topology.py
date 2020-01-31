import time
import argparse

from comnetsemu.net import Containernet
from mininet.log import info, setLogLevel
from mininet.node import Controller
from mininet.link import TCLink

CPU_SETS = "0"

if __name__ == "__main__":
    setLogLevel("info")

    net = Containernet(controller=Controller, link=TCLink)

    info("Add controller c0\n")
    net.addController("c0")

    info("Add switch s1\n")
    switch = net.addSwitch("s1")

    info("Add host h1\n")
    broker = net.addDockerHost(
        "h1",
        dimage="brokermqtt",
        ip="10.0.0.1",
        docker_args={},
    )

    info("Add link\n")
    net.addLink(switch, broker, bw=10, delay="10ms")

    info("Add host h2\n")
    controller = net.addDockerHost(
        "h2",
        dimage="txrx",
        ip="10.0.0.2",
        docker_args={"environment": ["NAME=cucina"]},
    )

    info("Add link\n")
    net.addLink(switch, controller, bw=10, delay="10ms")

    info("Start\n")
    net.start()

    time.sleep(60)

    info("Forza Napoli\n")
    net.stop()
