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
    
    # broker
    
    info("Add host brokermqtt\n")
    brokermqtt = net.addDockerHost(
        "brokermqtt",
        dimage="brokermqtt",
        ip="10.0.0.1",
        docker_args={},
    )

    info("Add link\n")
    net.addLink(switch, brokermqtt, bw=10, delay="10ms")
    
    # valvole
    
    info("Add host valvolacucina\n")
    v1 = net.addDockerHost(
        "v1",
        dimage="valvola",
        ip="10.0.0.3",
        docker_args={"environment": ["NAME=cucina"]},
    )
    
    info("Add link\n")
    net.addLink(switch, v1, bw=10, delay="10ms")
    
    info("Add host valvolacamera\n")
    v2 = net.addDockerHost(
        "v2",
        dimage="valvola",
        ip="10.0.0.4",
        docker_args={"environment": ["NAME=camera"]},
    )

    info("Add link\n")
    net.addLink(switch, v2, bw=10, delay="10ms")

    info("Add host valvolabagno\n")
    v3 = net.addDockerHost(
        "v3",
        dimage="valvola",
        ip="10.0.0.5",
        docker_args={"environment": ["NAME=bagno"]},
    )

    info("Add link\n")
    net.addLink(switch, v3, bw=10, delay="10ms")

    # umidificatori

    info("Add host umidificatorecucina\n")
    u1 = net.addDockerHost(
        "u1",
        dimage="umidificatore",
        ip="10.0.0.6",
        docker_args={"environment": ["NAME=cucina"]},
    )

    info("Add link\n")
    net.addLink(switch, u1, bw=10, delay="10ms")

    info("Add host umidificatorecamera\n")
    u2 = net.addDockerHost(
        "u2",
        dimage="umidificatore",
        ip="10.0.0.7",
        docker_args={"environment": ["NAME=camera"]},
    )

    info("Add link\n")
    net.addLink(switch, u2, bw=10, delay="10ms")
    
    info("Add host umidificatorebagno\n")
    u3 = net.addDockerHost(
        "u3",
        dimage="umidificatore",
        ip="10.0.0.8",
        docker_args={"environment": ["NAME=bagno"]},
    )

    info("Add link\n")
    net.addLink(switch, u3, bw=10, delay="10ms")
    
    # app
    
    info("Add host applicazione\n")
    a1 = net.addDockerHost(
        "a1",
        dimage="applicazione",
        ip="10.0.0.2",
        docker_args={},
    )

    info("Add link\n")
    net.addLink(switch, a1, bw=10, delay="10ms")
    
    # start

    info("Start\n")
    net.start()

    time.sleep(300)

    info("Forza Napoli\n")
    net.stop()
